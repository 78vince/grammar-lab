/* =============================================
   GrammarLab — Application Logic
   SPA Router, Renderer, Exercise Engine, Export
   ============================================= */

// ---- State ----
const state = {
  currentView: 'home',
  currentLevel: null,
  currentUnit: null,
  exerciseAttempts: {},  // { exerciseId: attemptCount }
  completedExercises: new Set(),
  comprehensiveCompleted: false
};

// ---- Learning Progress (localStorage) ----
const STORAGE_KEY = 'grammarlab_learned_units';

function getLearnedUnits() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

function isUnitLearned(unitId) {
  return getLearnedUnits().includes(unitId);
}

function toggleUnitLearned(unitId) {
  const learned = getLearnedUnits();
  const idx = learned.indexOf(unitId);
  if (idx === -1) {
    learned.push(unitId);
  } else {
    learned.splice(idx, 1);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(learned));
  return idx === -1; // returns true if now learned
}

function getLearnedCountForLevel(levelId) {
  const learned = getLearnedUnits();
  return learned.filter(id => id.startsWith(levelId + '-')).length;
}

// ---- DOM References ----
const appRoot = document.getElementById('app-root');
const navBreadcrumb = document.getElementById('nav-breadcrumb');
const navExportBtn = document.getElementById('nav-export-btn');
const exportModal = document.getElementById('export-modal');
const exportModalClose = document.getElementById('export-modal-close');
const toastEl = document.getElementById('toast');

// ---- Router ----
function navigateTo(hash) {
  window.location.hash = hash;
}

function parseRoute() {
  const hash = window.location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(Boolean);

  if (parts.length === 0) {
    return { view: 'home' };
  }
  if (parts[0] === 'level' && parts[1]) {
    return { view: 'level', level: parts[1] };
  }
  if (parts[0] === 'unit' && parts[1]) {
    return { view: 'unit', unitId: parts[1] };
  }
  return { view: 'home' };
}

function handleRoute() {
  const route = parseRoute();
  state.currentView = route.view;

  // Reset exercise state when navigating
  state.exerciseAttempts = {};
  state.completedExercises = new Set();
  state.comprehensiveCompleted = false;

  switch (route.view) {
    case 'level':
      state.currentLevel = route.level;
      state.currentUnit = null;
      renderLevelPage(route.level);
      break;
    case 'unit':
      const unit = GRAMMAR_DATA.units[route.unitId];
      if (unit) {
        state.currentLevel = unit.level;
        state.currentUnit = route.unitId;
        renderUnitPage(unit);
      } else {
        renderHome();
      }
      break;
    default:
      state.currentLevel = null;
      state.currentUnit = null;
      renderHome();
  }

  updateBreadcrumb();
  updateExportButton();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', handleRoute);

// ---- Breadcrumb ----
function updateBreadcrumb() {
  if (state.currentView === 'home') {
    navBreadcrumb.innerHTML = '';
    return;
  }

  let html = '<span class="separator">›</span>';

  if (state.currentLevel) {
    const level = GRAMMAR_DATA.levels.find(l => l.id === state.currentLevel);
    if (level) {
      if (state.currentView === 'unit') {
        html += `<a href="#/level/${level.id}">${level.tag} ${level.name}</a>`;
      } else {
        html += `<span class="current">${level.tag} ${level.name}</span>`;
      }
    }
  }

  if (state.currentUnit) {
    const unit = GRAMMAR_DATA.units[state.currentUnit];
    if (unit) {
      html += '<span class="separator">›</span>';
      html += `<span class="current">${unit.title}</span>`;
    }
  }

  navBreadcrumb.innerHTML = html;
}

// ---- Export Button ----
function updateExportButton() {
  if (state.currentView === 'unit') {
    navExportBtn.classList.remove('hidden');
  } else {
    navExportBtn.classList.add('hidden');
  }
}

navExportBtn.addEventListener('click', () => {
  if (state.currentUnit) {
    exportUnitToClipboard(state.currentUnit);
  }
});

exportModalClose.addEventListener('click', () => {
  exportModal.classList.add('hidden');
});

exportModal.addEventListener('click', (e) => {
  if (e.target === exportModal) {
    exportModal.classList.add('hidden');
  }
});

// ---- Renderers ----

function renderHome() {
  const levelsHTML = GRAMMAR_DATA.levels.map((level, i) => {
    const learnedCount = getLearnedCountForLevel(level.id);
    const progressText = learnedCount > 0 
      ? `<span class="level-card__progress">✅ ${learnedCount}/${level.unitCount} 已學習</span>` 
      : '';
    return `
    <div class="level-card stagger-${i + 1}" data-level="${level.id}" 
         ${level.available ? `onclick="navigateTo('#/level/${level.id}')"` : ''}
         role="button" tabindex="0" aria-label="${level.tag} ${level.name} ${level.nameEn}"
         onkeydown="if(event.key==='Enter') this.click()">
      ${!level.available ? '<span class="level-card__coming-soon">Coming Soon</span>' : ''}
      <span class="level-card__tag">${level.tag}</span>
      <h2 class="level-card__title">${level.name}</h2>
      <p class="level-card__subtitle">${level.nameEn}</p>
      <p class="level-card__desc">${level.description}</p>
      <div class="level-card__footer">
        ${level.available ? `<span class="level-card__units-count">📚 ${level.unitCount} 個單元</span>` : ''}
        ${level.available ? progressText : ''}
      </div>
    </div>
  `;
  }).join('');

  appRoot.innerHTML = `
    <section class="hero">
      <span class="hero-badge">✨ CEFR A1 — C2</span>
      <h1>
        系統化學習<br>
        <span class="gradient-text">英語文法</span>
      </h1>
      <p>依照歐洲共同語言參考標準（CEFR）分級設計，從入門到精通，透過繁體中文解說搭配大量英文例句，循序漸進掌握英語文法。</p>
    </section>
    <section class="level-grid" aria-label="CEFR 級別列表">
      ${levelsHTML}
    </section>
  `;
}

function renderLevelPage(levelId) {
  const level = GRAMMAR_DATA.levels.find(l => l.id === levelId);
  if (!level || !level.available) {
    renderHome();
    return;
  }

  const units = Object.values(GRAMMAR_DATA.units).filter(u => u.level === levelId);
  const levelColorClass = `level-${levelId}`;

  const unitsHTML = units.map((unit, i) => {
    const learned = isUnitLearned(unit.id);
    return `
    <div class="unit-card stagger-${i + 1} ${learned ? 'unit-card--learned' : ''}" 
         onclick="navigateTo('#/unit/${unit.id}')"
         role="button" tabindex="0" aria-label="${unit.title}"
         onkeydown="if(event.key==='Enter') this.click()">
      <div class="unit-card__number" style="background: hsla(var(--${levelId}-h), var(--${levelId}-s), var(--${levelId}-l), 0.15); color: hsl(var(--${levelId}-h), var(--${levelId}-s), 65%);">
        ${learned ? '✓' : unit.unitNumber}
      </div>
      <div class="unit-card__body">
        <h3 class="unit-card__title">${unit.title}</h3>
        <p class="unit-card__desc">${unit.description}</p>
      </div>
      ${learned ? '<span class="unit-card__learned-badge">已學習</span>' : ''}
      <svg class="unit-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
  `;
  }).join('');

  appRoot.innerHTML = `
    <header class="level-header">
      <span class="level-header__tag" style="background: hsla(var(--${levelId}-h), var(--${levelId}-s), var(--${levelId}-l), 0.15); color: hsl(var(--${levelId}-h), var(--${levelId}-s), 65%);">
        ${level.tag}
      </span>
      <h1>${level.name} ${level.nameEn}</h1>
      <p>${level.description}</p>
    </header>
    <section class="unit-list" aria-label="${level.tag} 單元列表">
      ${unitsHTML}
    </section>
  `;
}

function renderUnitPage(unit) {
  const levelId = unit.level;

  // Rules
  const rulesHTML = unit.rules.map(rule => `
    <li class="rule-item">
      <div class="rule-item__title">${rule.title}</div>
      <div class="rule-item__desc">${rule.desc}</div>
      <code class="rule-item__pattern">${rule.pattern}</code>
    </li>
  `).join('');

  // Examples
  const examplesHTML = unit.examples.map(ex => `
    <div class="example-item">
      <div class="example-item__en">${ex.en}</div>
      <div class="example-item__zh">${ex.zh}</div>
    </div>
  `).join('');

  // Pre-class Guidance
  const guidanceHTML = `
    <div class="guidance-box">
      <div class="guidance-box__label">🔍 觀察引導</div>
      <div class="guidance-box__text">${unit.preClassGuidance.text}</div>
      <div class="guidance-box__examples">${unit.preClassGuidance.examples}</div>
    </div>
  `;

  // Practice Exercises
  const exercisesHTML = unit.exercises.map((ex, i) => `
    <div class="exercise-item" id="exercise-${i}" data-exercise-id="ex-${i}">
      <div class="exercise-item__label">
        練習 ${i + 1}
        <span class="badge badge--basic">${ex.type === 'fill' ? '填空' : '改錯'}</span>
      </div>
      <div class="exercise-item__question">${formatQuestion(ex.question)}</div>
      <div class="exercise-input-row">
        <input type="text" class="exercise-input" id="input-ex-${i}" 
               placeholder="輸入你的答案..." aria-label="練習 ${i + 1} 的答案"
               data-answer="${escapeAttr(ex.answer)}" data-hint="${escapeAttr(ex.hint)}"
               data-explanation="${escapeAttr(ex.explanation)}"
               onkeydown="if(event.key==='Enter') checkAnswer('ex-${i}')">
        <button class="btn btn--primary btn--sm" onclick="checkAnswer('ex-${i}')">確認</button>
      </div>
      <div class="feedback" id="feedback-ex-${i}"></div>
    </div>
  `).join('');

  // Comprehensive Exercises
  const compExHTML = unit.comprehensiveExercises.map((ex, i) => {
    const badgeClass = ex.difficulty === 'basic' ? 'badge--basic' : ex.difficulty === 'advanced' ? 'badge--advanced' : 'badge--challenge';
    return `
      <div class="exercise-item" id="exercise-comp-${i}" data-exercise-id="comp-${i}">
        <div class="exercise-item__label">
          第 ${i + 1} 題
          <span class="badge ${badgeClass}">${ex.difficultyZh} ${ex.difficulty.charAt(0).toUpperCase() + ex.difficulty.slice(1)}</span>
        </div>
        <div class="exercise-item__question">${formatQuestion(ex.question)}</div>
        <div class="exercise-input-row">
          <input type="text" class="exercise-input" id="input-comp-${i}" 
                 placeholder="輸入你的答案..." aria-label="綜合練習 ${i + 1} 的答案"
                 data-answer="${escapeAttr(ex.answer)}" data-hint="${escapeAttr(ex.hint)}"
                 data-explanation="${escapeAttr(ex.explanation)}"
                 onkeydown="if(event.key==='Enter') checkAnswer('comp-${i}')">
          <button class="btn btn--primary btn--sm" onclick="checkAnswer('comp-${i}')">確認</button>
        </div>
        <div class="feedback" id="feedback-comp-${i}"></div>
      </div>
    `;
  }).join('');

  // Solutions
  const solutionsHTML = unit.comprehensiveExercises.map((ex, i) => `
    <div class="solution-item">
      <div class="solution-item__answer">第 ${i + 1} 題（${ex.difficultyZh}）：${ex.answer}</div>
      <div class="solution-item__explanation">${ex.explanation}</div>
    </div>
  `).join('');

  // Summary
  const summaryHTML = unit.summary.map(s => `<li>${s}</li>`).join('');

  // Navigation
  const allUnits = Object.values(GRAMMAR_DATA.units).filter(u => u.level === levelId);
  const currentIdx = allUnits.findIndex(u => u.id === unit.id);
  const prevUnit = currentIdx > 0 ? allUnits[currentIdx - 1] : null;
  const nextUnit = currentIdx < allUnits.length - 1 ? allUnits[currentIdx + 1] : null;

  const unitNavHTML = `
    <div class="unit-nav">
      ${prevUnit ? `<button class="btn btn--ghost" onclick="navigateTo('#/unit/${prevUnit.id}')">← ${prevUnit.title}</button>` : '<div></div>'}
      ${nextUnit ? `<button class="btn btn--ghost" onclick="navigateTo('#/unit/${nextUnit.id}')">${nextUnit.title} →</button>` : '<div></div>'}
    </div>
  `;

  appRoot.innerHTML = `
    <article class="unit-detail" data-accent="${levelId}">
      <header class="unit-detail__header">
        <div class="unit-detail__header-top">
          <span class="level-header__tag" style="background: hsla(var(--${levelId}-h), var(--${levelId}-s), var(--${levelId}-l), 0.15); color: hsl(var(--${levelId}-h), var(--${levelId}-s), 65%); display: inline-block; margin-bottom: var(--sp-3); font-family: var(--font-en); font-weight: 800; font-size: var(--fs-xs); letter-spacing: 0.05em; padding: var(--sp-1) var(--sp-3); border-radius: var(--radius-full);">
            ${unit.level.toUpperCase()} · UNIT ${unit.unitNumber}
          </span>
          <button class="btn-learned-toggle ${isUnitLearned(unit.id) ? 'btn-learned-toggle--active' : ''}" 
                  onclick="handleToggleLearned('${unit.id}')" 
                  aria-label="標記已學習">
            <span class="btn-learned-toggle__icon">${isUnitLearned(unit.id) ? '✅' : '☐'}</span>
            <span class="btn-learned-toggle__text">${isUnitLearned(unit.id) ? '已學習' : '標記已學習'}</span>
          </button>
        </div>
        <h1>${unit.title}</h1>
        <p>${unit.description}</p>
      </header>

      <!-- 課前引導 -->
      <section class="section-card stagger-1" aria-label="課前引導">
        <div class="section-card__header">
          <span class="section-card__icon">🔍</span>
          <h2 class="section-card__title">課前引導 Pre-class Guidance</h2>
        </div>
        <div class="section-card__body">
          ${guidanceHTML}
        </div>
      </section>

      <!-- 文法規則 -->
      <section class="section-card stagger-2" aria-label="文法規則">
        <div class="section-card__header">
          <span class="section-card__icon">📐</span>
          <h2 class="section-card__title">文法規則 Grammar Rules</h2>
        </div>
        <div class="section-card__body">
          <ul class="rules-list">${rulesHTML}</ul>
        </div>
      </section>

      <!-- 例句 -->
      <section class="section-card stagger-3" aria-label="例句">
        <div class="section-card__header">
          <span class="section-card__icon">💬</span>
          <h2 class="section-card__title">例句 Examples</h2>
        </div>
        <div class="section-card__body">
          <div class="examples-list">${examplesHTML}</div>
        </div>
      </section>

      <!-- 即時練習 -->
      <section class="section-card stagger-4" aria-label="練習">
        <div class="section-card__header">
          <span class="section-card__icon">✏️</span>
          <h2 class="section-card__title">即時練習 Practice</h2>
        </div>
        <div class="section-card__body">
          <div class="exercise-group">${exercisesHTML}</div>
        </div>
      </section>

      <!-- 重點總結 -->
      <section class="section-card stagger-5" aria-label="重點總結">
        <div class="section-card__header">
          <span class="section-card__icon">📋</span>
          <h2 class="section-card__title">重點總結 Summary</h2>
        </div>
        <div class="section-card__body">
          <div class="summary-box">
            <h3>本單元核心概念</h3>
            <ul>${summaryHTML}</ul>
          </div>
        </div>
      </section>

      <!-- 綜合練習 -->
      <section class="section-card stagger-6" aria-label="綜合練習">
        <div class="section-card__header">
          <span class="section-card__icon">🏆</span>
          <h2 class="section-card__title">綜合練習 Comprehensive Exercises</h2>
        </div>
        <div class="section-card__body">
          <div class="comp-exercises-header">
            <h3>完成以下 ${unit.comprehensiveExercises.length} 題練習</h3>
          </div>
          <div class="exercise-group">${compExHTML}</div>
          <div style="text-align: center; margin-top: var(--sp-6);">
            <button class="btn btn--primary" id="show-solutions-btn" onclick="showSolutions()">
              📖 查看解答與解析
            </button>
          </div>
        </div>
      </section>

      <!-- 解答與解析 (hidden until completed) -->
      <section class="section-card solutions-section" id="solutions-section" aria-label="解答與解析">
        <div class="section-card__header">
          <span class="section-card__icon">📖</span>
          <h2 class="section-card__title">解答與解析 Solutions & Explanations</h2>
        </div>
        <div class="section-card__body">
          ${solutionsHTML}
        </div>
      </section>

      <div style="display: flex; justify-content: center; margin: var(--sp-8) 0 var(--sp-4);">
        <button class="btn-learned-toggle ${isUnitLearned(unit.id) ? 'btn-learned-toggle--active' : ''}" 
                onclick="handleToggleLearned('${unit.id}')" 
                aria-label="標記已學習">
          <span class="btn-learned-toggle__icon">${isUnitLearned(unit.id) ? '✅' : '☐'}</span>
          <span class="btn-learned-toggle__text">${isUnitLearned(unit.id) ? '已學習' : '標記已學習'}</span>
        </button>
      </div>

      ${unitNavHTML}
    </article>
  `;
}

// ---- Helper Functions ----

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatQuestion(question) {
  return question.replace(/_{3,}/g, '<span class="blank">______</span>');
}

// ---- Exercise Engine ----

// Contraction equivalence map: standard form <-> contracted form
const CONTRACTION_MAP = [
  ['is not', "isn't"],
  ['are not', "aren't"],
  ['was not', "wasn't"],
  ['were not', "weren't"],
  ['do not', "don't"],
  ['does not', "doesn't"],
  ['did not', "didn't"],
  ['will not', "won't"],
  ['would not', "wouldn't"],
  ['could not', "couldn't"],
  ['should not', "shouldn't"],
  ['have not', "haven't"],
  ['has not', "hasn't"],
  ['had not', "hadn't"],
  ['can not', "can't"],
  ['cannot', "can't"],
  ['must not', "mustn't"],
  ['need not', "needn't"],
  ['shall not', "shan't"],
  ['i am', "i'm"],
  ['he is', "he's"],
  ['she is', "she's"],
  ['it is', "it's"],
  ['we are', "we're"],
  ['they are', "they're"],
  ['you are', "you're"],
  ['i have', "i've"],
  ['you have', "you've"],
  ['we have', "we've"],
  ['they have', "they've"],
  ['he has', "he's"],
  ['she has', "she's"],
  ['it has', "it's"],
  ['i had', "i'd"],
  ['he had', "he'd"],
  ['she had', "she'd"],
  ['we had', "we'd"],
  ['they had', "they'd"],
  ['you had', "you'd"],
  ['i will', "i'll"],
  ['he will', "he'll"],
  ['she will', "she'll"],
  ['it will', "it'll"],
  ['we will', "we'll"],
  ['they will', "they'll"],
  ['you will', "you'll"],
  ['i would', "i'd"],
  ['he would', "he'd"],
  ['she would', "she'd"],
  ['we would', "we'd"],
  ['they would', "they'd"],
  ['you would', "you'd"],
  ['is not eating', "isn't eating"],
  ['is not sleeping', "isn't sleeping"],
  ['there is', "there's"],
  ['there are', "there're"],
  ['that is', "that's"],
  ['what is', "what's"],
  ['who is', "who's"],
  ['where is', "where's"],
  ['here is', "here's"],
  ['let us', "let's"],
];

function normalizeAnswer(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[\u2018\u2019'']/g, "'");
}

/**
 * Generate all equivalent forms of an answer by expanding/contracting.
 * Returns a Set of normalized answer strings.
 */
function getEquivalentAnswers(answer) {
  const normalized = normalizeAnswer(answer);
  const equivalents = new Set([normalized]);

  // For each contraction pair, try replacement in both directions
  for (const [full, contracted] of CONTRACTION_MAP) {
    if (normalized.includes(full)) {
      equivalents.add(normalized.replace(full, contracted));
    }
    if (normalized.includes(contracted)) {
      equivalents.add(normalized.replace(contracted, full));
    }
  }

  return equivalents;
}

function checkAnswer(exerciseId) {
  const input = document.getElementById(`input-${exerciseId}`);
  const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
  const exerciseItem = input.closest('.exercise-item');

  if (!input || !feedbackEl) return;

  const userAnswer = normalizeAnswer(input.value);
  const correctAnswer = normalizeAnswer(input.dataset.answer);
  const hint = input.dataset.hint;
  const explanation = input.dataset.explanation;

  if (!userAnswer) {
    showFeedback(feedbackEl, '請先輸入你的答案。', 'incorrect');
    return;
  }

  // Track attempts
  if (!state.exerciseAttempts[exerciseId]) {
    state.exerciseAttempts[exerciseId] = 0;
  }
  state.exerciseAttempts[exerciseId]++;

  // Check for multi-part answers (e.g., "Does, play")
  const correctParts = correctAnswer.split(',').map(s => s.trim());
  const userParts = userAnswer.split(',').map(s => s.trim());

  let isCorrect = false;

  if (correctParts.length > 1) {
    // Multi-part answer: check if all parts match
    // Also try with space-only separator
    const userPartsAlt = userAnswer.split(/[,，]\s*/).map(s => s.trim());
    const candidateArrays = [userParts, userPartsAlt];

    for (const candidates of candidateArrays) {
      if (candidates.length === correctParts.length) {
        const allMatch = correctParts.every((cp, idx) => {
          const eqs = getEquivalentAnswers(cp);
          return eqs.has(normalizeAnswer(candidates[idx]));
        });
        if (allMatch) { isCorrect = true; break; }
      }
    }
  } else {
    // Single answer — check against all equivalent forms
    const equivalents = getEquivalentAnswers(correctAnswer);
    isCorrect = equivalents.has(userAnswer);
  }

  if (isCorrect) {
    // Correct!
    input.classList.remove('incorrect');
    input.classList.add('correct');
    input.disabled = true;
    exerciseItem.classList.remove('incorrect');
    exerciseItem.classList.add('correct');

    state.completedExercises.add(exerciseId);
    showFeedback(feedbackEl, `✅ 正確！${explanation}`, 'correct');

    // Disable the button
    const btn = exerciseItem.querySelector('.btn');
    if (btn) { btn.disabled = true; btn.style.opacity = '0.5'; }

    // Check if all comprehensive exercises are done
    checkComprehensiveCompletion();
  } else {
    // Incorrect
    input.classList.remove('correct');
    input.classList.add('incorrect');
    exerciseItem.classList.add('incorrect');

    // Remove shake after animation
    setTimeout(() => exerciseItem.classList.remove('incorrect'), 400);
    setTimeout(() => input.classList.remove('incorrect'), 600);

    const attempts = state.exerciseAttempts[exerciseId];

    if (attempts >= 3) {
      // Frustration management: stronger encouragement + lower difficulty hint
      showFeedback(feedbackEl,
        `💪 別灰心！你已經很接近了。讓我給你更多提示：\n\n${hint}\n\n再額外提示一下：答案的第一個字母是「${correctAnswer.charAt(0).toUpperCase()}」。慢慢來，你一定可以的！`,
        'encouragement');
    } else if (attempts >= 2) {
      // Give hint
      showFeedback(feedbackEl, `💡 提示：${hint}`, 'hint');
    } else {
      // First wrong attempt
      showFeedback(feedbackEl, `❌ 再想想看。仔細回顧一下上面的文法規則。`, 'incorrect');
    }
  }
}

function showFeedback(el, message, type) {
  el.className = `feedback visible feedback--${type}`;
  el.innerHTML = message.replace(/\n/g, '<br>');
}

function checkComprehensiveCompletion() {
  const unit = GRAMMAR_DATA.units[state.currentUnit];
  if (!unit) return;

  const totalComp = unit.comprehensiveExercises.length;
  let completedComp = 0;

  for (let i = 0; i < totalComp; i++) {
    if (state.completedExercises.has(`comp-${i}`)) {
      completedComp++;
    }
  }

  const solBtn = document.getElementById('show-solutions-btn');
  if (solBtn) {
    if (completedComp >= totalComp) {
      solBtn.textContent = '🎉 全部完成！查看解答與解析';
      state.comprehensiveCompleted = true;
    } else {
      solBtn.textContent = `📖 查看解答與解析（已完成 ${completedComp}/${totalComp}）`;
    }
  }
}

function showSolutions() {

  const solSection = document.getElementById('solutions-section');
  if (solSection) {
    solSection.classList.add('visible');
    solSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ---- Export to Clipboard ----

function exportUnitToClipboard(unitId) {
  const unit = GRAMMAR_DATA.units[unitId];
  if (!unit) return;

  let md = '';

  // Title
  md += `# ${unit.title}\n`;
  md += `## ${unit.titleEn}\n\n`;
  md += `${unit.description}\n\n`;
  md += `---\n\n`;

  // Rules
  md += `## 📐 文法規則 Grammar Rules\n\n`;
  unit.rules.forEach((rule, i) => {
    md += `### ${rule.title}\n`;
    md += `${rule.desc}\n\n`;
    md += `> **句型：** ${rule.pattern}\n\n`;
  });

  // Examples
  md += `## 💬 例句 Examples\n\n`;
  unit.examples.forEach(ex => {
    const enClean = ex.en.replace(/<b>/g, '**').replace(/<\/b>/g, '**');
    md += `- ${enClean}\n  ${ex.zh}\n\n`;
  });

  // Pre-class guidance
  md += `## 🔍 課前引導 Pre-class Guidance\n\n`;
  md += `${unit.preClassGuidance.text}\n\n`;
  md += `> ${unit.preClassGuidance.examples}\n\n`;

  // Exercises
  md += `## ✏️ 即時練習 Practice Exercises\n\n`;
  unit.exercises.forEach((ex, i) => {
    md += `**練習 ${i + 1}：** ${ex.question}\n\n`;
  });

  // Summary
  md += `## 📋 重點總結 Summary\n\n`;
  unit.summary.forEach(s => {
    md += `- ${s}\n`;
  });
  md += '\n';

  // Comprehensive exercises
  md += `## 🏆 綜合練習 Comprehensive Exercises\n\n`;
  unit.comprehensiveExercises.forEach((ex, i) => {
    md += `**第 ${i + 1} 題（${ex.difficultyZh} ${ex.difficulty}）：** ${ex.question}\n\n`;
  });

  // Solutions
  md += `## 📖 解答與解析 Solutions & Explanations\n\n`;
  unit.comprehensiveExercises.forEach((ex, i) => {
    md += `### 第 ${i + 1} 題（${ex.difficultyZh}）\n`;
    md += `**答案：** ${ex.answer}\n\n`;
    md += `${ex.explanation}\n\n`;
  });

  // Copy to clipboard
  navigator.clipboard.writeText(md).then(() => {
    const statusEl = document.getElementById('export-status');
    if (statusEl) {
      statusEl.textContent = '✅ 已成功複製到剪貼簿！';
    }
    exportModal.classList.remove('hidden');
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = md;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      const statusEl = document.getElementById('export-status');
      if (statusEl) {
        statusEl.textContent = '✅ 已成功複製到剪貼簿！';
      }
      exportModal.classList.remove('hidden');
    } catch (err) {
      showToast('複製失敗，請手動選取並複製');
    }
    document.body.removeChild(textarea);
  });
}

// ---- Toast ----
let toastTimeout;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.remove('hidden');
  // Force reflow
  void toastEl.offsetWidth;
  toastEl.classList.add('visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('visible');
    setTimeout(() => toastEl.classList.add('hidden'), 400);
  }, 3000);
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  // Small delay for skeleton effect
  setTimeout(() => {
    handleRoute();
  }, 300);
});

// Handle initial load if no hash
if (!window.location.hash) {
  window.location.hash = '#/';
}

// Make functions available globally for inline handlers
// Handle toggle learned button
function handleToggleLearned(unitId) {
  const nowLearned = toggleUnitLearned(unitId);
  const btns = document.querySelectorAll('.btn-learned-toggle');
  btns.forEach(btn => {
    btn.className = `btn-learned-toggle ${nowLearned ? 'btn-learned-toggle--active' : ''}`;
    btn.querySelector('.btn-learned-toggle__icon').textContent = nowLearned ? '✅' : '☐';
    btn.querySelector('.btn-learned-toggle__text').textContent = nowLearned ? '已學習' : '標記已學習';
  });

  // Show toast
  showToast(nowLearned ? '✅ 已標記為「已學習」' : '已取消「已學習」標記');
}

window.navigateTo = navigateTo;
window.checkAnswer = checkAnswer;
window.showSolutions = showSolutions;
window.handleToggleLearned = handleToggleLearned;

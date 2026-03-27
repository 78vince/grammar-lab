/* =============================================
   GrammarLab — Grammar Data
   Structured content for CEFR levels A1-C2
   ============================================= */

const GRAMMAR_DATA = {
  levels: [
    {
      id: 'a1',
      name: '入門',
      nameEn: 'Beginner',
      tag: 'A1',
      description: '從零開始建立英語基礎。學習最基本的句型結構、Be 動詞、簡單現在式，以及日常溝通所需的核心文法。',
      available: true,
      unitCount: 10
    },
    {
      id: 'a2',
      name: '基礎',
      nameEn: 'Elementary',
      tag: 'A2',
      description: '鞏固基礎並擴展表達能力。學習過去式、進行式、未來式等時態，開始描述過去經歷和未來計劃。',
      available: true,
      unitCount: 10
    },
    {
      id: 'b1',
      name: '中級',
      nameEn: 'Intermediate',
      tag: 'B1',
      description: '提升表達的豐富度與準確性。學習現在完成式、條件句、被動語態等進階文法結構。',
      available: true,
      unitCount: 10
    },
    {
      id: 'b2',
      name: '中高級',
      nameEn: 'Upper-Intermediate',
      tag: 'B2',
      description: '掌握細膩的語言表達。學習假設語氣、完成式變體、關係子句等複雜結構。',
      available: true,
      unitCount: 10
    },
    {
      id: 'c1',
      name: '高級',
      nameEn: 'Advanced',
      tag: 'C1',
      description: '精通英語文法的高階應用。掌握倒裝句、分裂句、混合條件句等進階結構。',
      available: true,
      unitCount: 10
    },
    {
      id: 'c2',
      name: '精通',
      nameEn: 'Proficiency',
      tag: 'C2',
      description: '達到接近母語者的文法理解。深入探討語法細微差異、修辭手法與風格運用。',
      available: true,
      unitCount: 10
    }
  ],

  units: {
    // =====================
    // A1 UNITS
    // =====================
    'a1-1': {
      id: 'a1-1',
      level: 'a1',
      unitNumber: 1,
      title: '[A1] 現在簡單式 — Be 動詞',
      titleEn: 'Present Simple — To Be',
      description: '學習英語中最基礎的動詞「be」（am / is / are）在現在簡單式的用法，包含肯定句、否定句與疑問句的結構。',
      
      rules: [
        {
          title: '規則一：主詞與 Be 動詞的配對',
          desc: '英文的 Be 動詞必須根據主詞來選擇正確的形式。這是英語最基本的規則之一。',
          pattern: 'I → am ｜ He/She/It → is ｜ You/We/They → are'
        },
        {
          title: '規則二：肯定句結構',
          desc: '肯定句的語序為「主詞 + Be 動詞 + 補語」。補語可以是名詞、形容詞或介係詞片語。',
          pattern: 'Subject + am/is/are + Complement'
        },
        {
          title: '規則三：否定句結構',
          desc: '在 Be 動詞後面直接加上 "not" 即可形成否定句。常見縮寫：isn\'t、aren\'t。',
          pattern: 'Subject + am/is/are + not + Complement'
        },
        {
          title: '規則四：疑問句結構',
          desc: '將 Be 動詞移到主詞前面，就能形成 Yes/No 疑問句。',
          pattern: 'Am/Is/Are + Subject + Complement ?'
        }
      ],

      examples: [
        { en: 'I <b>am</b> a student.', zh: '我是一名學生。' },
        { en: 'She <b>is</b> very happy today.', zh: '她今天非常開心。' },
        { en: 'They <b>are</b> from Japan.', zh: '他們來自日本。' },
        { en: 'He <b>is not</b> a doctor.', zh: '他不是醫生。' },
        { en: 'We <b>are not</b> tired.', zh: '我們不累。' },
        { en: '<b>Are</b> you ready?', zh: '你準備好了嗎？' },
        { en: '<b>Is</b> it cold outside?', zh: '外面冷嗎？' }
      ],

      preClassGuidance: {
        text: '請仔細觀察以下英文句子，注意每個句子中粗體標示的動詞。你能發現什麼規律嗎？為什麼不同的句子使用不同的動詞形式？',
        examples: 'I am a student. / She is happy. / They are from Japan. / He is not a doctor. / Are you ready?'
      },

      exercises: [
        {
          type: 'fill',
          question: 'He _____ very nice.',
          hint: '「He」是第三人稱單數，想想看需要搭配哪個 Be 動詞？',
          answer: 'is',
          explanation: '「He」屬於第三人稱單數（he/she/it），所以要使用 "is"。'
        },
        {
          type: 'fill',
          question: 'They _____ my best friends.',
          hint: '「They」是複數主詞，複數主詞和 Be 動詞的搭配是什麼呢？',
          answer: 'are',
          explanation: '「They」是複數主詞，複數主詞搭配 "are"。'
        }
      ],

      summary: [
        'Be 動詞有三種現在式形式：am、is、are',
        'I 搭配 am；He/She/It 搭配 is；You/We/They 搭配 are',
        '否定句在 Be 動詞後加 not',
        '疑問句將 Be 動詞移至主詞前面'
      ],

      comprehensiveExercises: [
        {
          difficulty: 'basic',
          difficultyZh: '基礎',
          question: 'My sister _____ a teacher.',
          hint: '「My sister」可以用哪個代名詞替代？替代後你就知道要用哪個 Be 動詞了。',
          answer: 'is',
          explanation: '「My sister」等同於 "she"（第三人稱單數），所以使用 "is"。完整句子：My sister is a teacher.（我的姐姐是一名老師。）'
        },
        {
          difficulty: 'advanced',
          difficultyZh: '進階',
          question: '_____ your parents at home now?',
          hint: '這是一個疑問句。「your parents」是複數，想想看疑問句的 Be 動詞應該放在哪裡？',
          answer: 'Are',
          explanation: '疑問句中 Be 動詞放在主詞前面。「your parents」是複數，所以用 "Are"。完整句子：Are your parents at home now?（你的父母現在在家嗎？）'
        },
        {
          difficulty: 'challenge',
          difficultyZh: '挑戰',
          question: 'Tom and I _____ not in the same class.',
          hint: '「Tom and I」代表「我和 Tom」，這是兩個人以上，屬於什麼類型的主詞呢？',
          answer: 'are',
          explanation: '「Tom and I」是複合主詞，等同於 "we"（第一人稱複數），所以使用 "are"。完整句子：Tom and I are not in the same class.（Tom 和我不在同一個班級。）'
        }
      ]
    },

    'a1-2': {
      id: 'a1-2',
      level: 'a1',
      unitNumber: 2,
      title: '[A1] 現在簡單式 — 一般動詞',
      titleEn: 'Present Simple — Action Verbs',
      description: '學習在現在簡單式中使用一般動詞（如 like, play, eat）的規則，掌握第三人稱單數加 -s/-es 的變化規則。',

      rules: [
        {
          title: '規則一：一般動詞不需要 Be 動詞',
          desc: '使用一般動詞（action verbs）時，不需要加 Be 動詞。直接用「主詞 + 動詞」的結構。',
          pattern: 'Subject + Verb (+ Object)'
        },
        {
          title: '規則二：第三人稱單數加 -s/-es',
          desc: '當主詞是第三人稱單數（he/she/it）時，動詞字尾必須加 -s 或 -es。以 -ch, -sh, -ss, -x, -o 結尾的動詞加 -es。',
          pattern: 'He/She/It + Verb-s/es'
        },
        {
          title: '規則三：否定句使用 do/does + not',
          desc: '否定句不能直接在動詞後加 not，必須使用助動詞 do（一般）或 does（第三人稱單數）+ not + 原形動詞。',
          pattern: 'Subject + do/does + not + Verb(原形)'
        },
        {
          title: '規則四：疑問句使用 Do/Does 開頭',
          desc: '疑問句以 Do 或 Does 開頭，後面接主詞和原形動詞。注意：使用 Does 時，動詞恢復原形。',
          pattern: 'Do/Does + Subject + Verb(原形)?'
        }
      ],

      examples: [
        { en: 'I <b>like</b> coffee.', zh: '我喜歡咖啡。' },
        { en: 'She <b>plays</b> piano every day.', zh: '她每天彈鋼琴。' },
        { en: 'He <b>watches</b> TV after dinner.', zh: '他晚餐後看電視。' },
        { en: 'We <b>do not</b> (don\'t) <b>eat</b> meat.', zh: '我們不吃肉。' },
        { en: 'She <b>does not</b> (doesn\'t) <b>like</b> spicy food.', zh: '她不喜歡辣的食物。' },
        { en: '<b>Do</b> you <b>speak</b> English?', zh: '你說英語嗎？' },
        { en: '<b>Does</b> he <b>live</b> in Taipei?', zh: '他住在台北嗎？' }
      ],

      preClassGuidance: {
        text: '請觀察以下句子中的動詞，比較第一組和第二組的差異。為什麼有些動詞後面有 -s，有些沒有？',
        examples: 'I like coffee. / She plays piano. / He watches TV. / Do you speak English? / Does he live in Taipei?'
      },

      exercises: [
        {
          type: 'fill',
          question: 'She _____ (go) to school by bus.',
          hint: '「She」是第三人稱單數，「go」以 o 結尾的動詞，第三人稱單數要怎麼變化呢？',
          answer: 'goes',
          explanation: '「She」是第三人稱單數，動詞「go」以 o 結尾，需加 -es，變成 "goes"。'
        },
        {
          type: 'fill',
          question: 'They _____ (not / like) rainy days.',
          hint: '「They」是複數主詞，否定句需要用哪個助動詞？記住動詞要恢復原形。',
          answer: 'do not like',
          explanation: '「They」是複數主詞，否定句使用 "do not"（don\'t）+ 原形動詞 "like"。'
        }
      ],

      summary: [
        '一般動詞在現在簡單式中不需要 Be 動詞',
        '第三人稱單數（he/she/it）時，動詞加 -s 或 -es',
        '否定句用 do not / does not + 原形動詞',
        '疑問句用 Do / Does + 主詞 + 原形動詞',
        '使用 does 時，動詞必須恢復原形（不加 -s）'
      ],

      comprehensiveExercises: [
        {
          difficulty: 'basic',
          difficultyZh: '基礎',
          question: 'My cat _____ (sleep) all day.',
          hint: '「My cat」等同於哪個代名詞？想想動詞需要做什麼變化。',
          answer: 'sleeps',
          explanation: '「My cat」等同於 "it"（第三人稱單數），動詞 "sleep" 加 -s，變成 "sleeps"。完整句子：My cat sleeps all day.（我的貓整天都在睡覺。）'
        },
        {
          difficulty: 'advanced',
          difficultyZh: '進階',
          question: '_____ your brother _____ (play) basketball?',
          hint: '這是一個疑問句，「your brother」是單數。疑問句開頭用什麼助動詞？動詞要用什麼形式？',
          answer: 'Does, play',
          explanation: '「your brother」是第三人稱單數，疑問句用 "Does" 開頭。使用 Does 後，動詞恢復原形 "play"。完整句子：Does your brother play basketball?（你的哥哥打籃球嗎？）'
        },
        {
          difficulty: 'challenge',
          difficultyZh: '挑戰',
          question: 'Maria _____ (not / watch) horror movies.',
          hint: '「Maria」是第三人稱單數，否定句需要用哪個助動詞？注意動詞的形式。',
          answer: 'does not watch',
          explanation: '「Maria」是第三人稱單數，否定句用 "does not"（doesn\'t）+ 原形動詞 "watch"。完整句子：Maria does not watch horror movies.（Maria 不看恐怖電影。）'
        }
      ]
    },

    'a1-3': {
      id: 'a1-3',
      level: 'a1',
      unitNumber: 3,
      title: '[A1] 名詞單複數與冠詞',
      titleEn: 'Singular/Plural Nouns & Articles',
      description: '掌握英文名詞的單複數變化規則（加 -s/-es/-ies 等），以及不定冠詞 a/an 與定冠詞 the 的基本用法。',

      rules: [
        {
          title: '規則一：名詞複數的基本規則',
          desc: '大部分名詞直接加 -s 即可變成複數。以 -s, -sh, -ch, -x, -z 結尾的名詞加 -es。',
          pattern: 'book → books ｜ bus → buses ｜ box → boxes'
        },
        {
          title: '規則二：以子音 + y 結尾的名詞',
          desc: '如果名詞以「子音 + y」結尾，去掉 y 後加 -ies。若是「母音 + y」結尾，直接加 -s。',
          pattern: 'city → cities ｜ baby → babies ｜ boy → boys ｜ day → days'
        },
        {
          title: '規則三：不定冠詞 a / an',
          desc: 'a 和 an 用於不特定的單數可數名詞。在子音開頭的字前用 a，在母音開頭的字前用 an。注意是看「發音」而非拼字。',
          pattern: 'a book / a university ｜ an apple / an hour'
        },
        {
          title: '規則四：定冠詞 the',
          desc: 'the 用於「特定的」名詞，表示說話者和聽者都知道指的是哪一個。可用於單數、複數及不可數名詞。',
          pattern: 'the book (那本書) / the books (那些書) / the water (那些水)'
        }
      ],

      examples: [
        { en: 'I have two <b>cats</b>.', zh: '我有兩隻貓。' },
        { en: 'There are three <b>boxes</b> on the table.', zh: '桌上有三個箱子。' },
        { en: 'She likes big <b>cities</b>.', zh: '她喜歡大城市。' },
        { en: 'He is <b>a</b> teacher.', zh: '他是一名老師。' },
        { en: 'I want <b>an</b> orange.', zh: '我想要一顆柳橙。' },
        { en: 'Please close <b>the</b> door.', zh: '請關上那扇門。' },
        { en: 'She is <b>an</b> honest person.', zh: '她是一個誠實的人。' }
      ],

      preClassGuidance: {
        text: '請觀察以下名詞的變化方式，以及 a, an, the 出現的位置。你能看出它們什麼時候用 a，什麼時候用 an 嗎？',
        examples: 'a teacher / an orange / an honest person / the door / two cats / three boxes'
      },

      exercises: [
        {
          type: 'fill',
          question: 'There are many _____ (child) in the park.',
          hint: '「child」是不規則名詞，它的複數形式不是直接加 -s。你知道怎麼變化嗎？',
          answer: 'children',
          explanation: '「child」的複數形式是不規則變化：children。這是英文中常見的不規則複數之一。'
        },
        {
          type: 'fill',
          question: 'She is _____ engineer.',
          hint: '「engineer」的第一個字母是什麼？它的發音是母音還是子音呢？',
          answer: 'an',
          explanation: '「engineer」以母音 /e/ 開頭，所以用 "an"。完整句子：She is an engineer.'
        }
      ],

      summary: [
        '大部分名詞加 -s 即為複數；特殊結尾加 -es 或 -ies',
        '有些名詞是不規則複數（child → children, man → men）',
        'a 用於子音開頭的字前；an 用於母音開頭的字前',
        '判斷 a/an 看的是「發音」而非「拼字」',
        'the 用於雙方都知道的特定事物'
      ],

      comprehensiveExercises: [
        {
          difficulty: 'basic',
          difficultyZh: '基礎',
          question: 'I need _____ (a/an) umbrella.',
          hint: '「umbrella」的第一個發音是什麼？它是母音還是子音？',
          answer: 'an',
          explanation: '「umbrella」以母音 /ʌ/ 開頭，所以使用 "an"。完整句子：I need an umbrella.（我需要一把雨傘。）'
        },
        {
          difficulty: 'advanced',
          difficultyZh: '進階',
          question: 'There are five _____ (tomato) in the basket.',
          hint: '「tomato」以 o 結尾，回想一下以 o 結尾的名詞如何變複數？',
          answer: 'tomatoes',
          explanation: '「tomato」以 o 結尾，複數形式加 -es，變成 "tomatoes"。完整句子：There are five tomatoes in the basket.（籃子裡有五顆番茄。）'
        },
        {
          difficulty: 'challenge',
          difficultyZh: '挑戰',
          question: 'He goes to _____ (a/an) university in _____ (a/an) European country.',
          hint: '注意！「university」和「European」雖然拼寫以 u/E 開頭，但它們的「發音」開頭是什麼呢？',
          answer: 'a, a',
          explanation: '「university」發音以 /juː/（子音 y）開頭，用 "a"。「European」發音以 /jʊər/（子音 y）開頭，也用 "a"。這就是為什麼要看「發音」而非「拼字」。完整句子：He goes to a university in a European country.（他在一個歐洲國家的大學讀書。）'
        }
      ]
    },

    'a1-4': {
      id: 'a1-4',
      level: 'a1',
      unitNumber: 4,
      title: '[A1] 指示代名詞',
      titleEn: 'Demonstratives — This / That / These / Those',
      description: '學習使用 this、that、these、those 來指示近處或遠處的人事物，掌握單複數的對應關係。',
      rules: [
        { title: '規則一：近處單數用 this', desc: '「this」指距離說話者較近的單數事物或人，中文相當於「這個」。', pattern: 'This is my book. / This pen is blue.' },
        { title: '規則二：遠處單數用 that', desc: '「that」指距離說話者較遠的單數事物或人，中文相當於「那個」。', pattern: 'That is her car. / That building is tall.' },
        { title: '規則三：近處複數用 these', desc: '「these」指距離較近的複數事物或人，中文相當於「這些」。', pattern: 'These are my friends. / These shoes are new.' },
        { title: '規則四：遠處複數用 those', desc: '「those」指距離較遠的複數事物或人，中文相當於「那些」。', pattern: 'Those are his toys. / Those mountains are beautiful.' }
      ],
      examples: [
        { en: '<b>This</b> is my notebook.', zh: '這是我的筆記本。' },
        { en: '<b>That</b> is a beautiful painting.', zh: '那是一幅美麗的畫。' },
        { en: '<b>These</b> cookies are delicious.', zh: '這些餅乾很好吃。' },
        { en: '<b>Those</b> students are very smart.', zh: '那些學生很聰明。' },
        { en: 'Is <b>this</b> your phone?', zh: '這是你的手機嗎？' },
        { en: 'Who is <b>that</b> man?', zh: '那個男人是誰？' }
      ],
      preClassGuidance: { text: '請觀察以下句子中的粗體字。它們分別指的是「近的」還是「遠的」？是「一個」還是「很多個」？', examples: 'This is my notebook. / That is a painting. / These cookies are delicious. / Those students are smart.' },
      exercises: [
        { type: 'fill', question: '_____ (This/These) are my new shoes.', hint: '「shoes」是複數名詞，指近處的複數應該用哪一個？', answer: 'These', explanation: '「shoes」是複數，指近處複數用 "These"。' },
        { type: 'fill', question: '_____ (That/Those) building over there is a hospital.', hint: '「building」是單數，而且在遠處（over there），應該用哪一個？', answer: 'That', explanation: '「building」是單數，指遠處的單數用 "That"。' }
      ],
      summary: ['this = 近處單數、that = 遠處單數', 'these = 近處複數、those = 遠處複數', '可當主詞（This is...）或修飾名詞（this book）', '疑問句中也常使用（Is this your...?）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '_____ is my mother. (指著身邊的人)', hint: '指著身邊（近處）的一個人，用哪一個？', answer: 'This', explanation: '指著近處的一個人用 "This"。完整句子：This is my mother.（這是我的母親。）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'Are _____ your keys on the table? (桌子就在你旁邊)', hint: '「keys」是複數，桌子在旁邊代表近處。', answer: 'these', explanation: '「keys」是複數，近處用 "these"。完整句子：Are these your keys on the table?（桌上這些是你的鑰匙嗎？）' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '_____ flowers in my hand are for you. _____ flowers in the garden are for decoration.', hint: '手中的是近處，花園裡的是遠處。兩個都是複數。', answer: 'These, Those', explanation: '手中（近處複數）用 "These"；花園裡（遠處複數）用 "Those"。' }
      ]
    },

    'a1-5': {
      id: 'a1-5',
      level: 'a1',
      unitNumber: 5,
      title: '[A1] 所有格與所有格代名詞',
      titleEn: 'Possessives — My, Your, His, Her & Mine, Yours',
      description: '學習如何表達「某人的東西」，包含所有格形容詞（my, your, his, her...）和所有格代名詞（mine, yours, his, hers...）的用法。',
      rules: [
        { title: '規則一：所有格形容詞（放在名詞前面）', desc: '所有格形容詞必須放在名詞前面，用來修飾名詞。不能單獨使用。', pattern: 'I → my ｜ you → your ｜ he → his ｜ she → her ｜ it → its ｜ we → our ｜ they → their' },
        { title: '規則二：所有格代名詞（取代名詞）', desc: '所有格代名詞可以取代「所有格形容詞 + 名詞」，後面不再接名詞。', pattern: 'my → mine ｜ your → yours ｜ his → his ｜ her → hers ｜ our → ours ｜ their → theirs' },
        { title: '規則三：名詞的所有格', desc: '在名詞後加 \'s 表示「某人的」。複數名詞以 s 結尾時，只加 \'。', pattern: "Tom's book ｜ my sister's car ｜ the students' classroom" },
        { title: '規則四：Whose 疑問詞', desc: 'Whose 用來詢問「這是誰的？」，後面可接名詞或單獨使用。', pattern: 'Whose book is this? / Whose is this?' }
      ],
      examples: [
        { en: '<b>My</b> name is Lisa.', zh: '我的名字是 Lisa。' },
        { en: 'Is this <b>your</b> pen?', zh: '這是你的筆嗎？' },
        { en: '<b>Her</b> brother is a doctor.', zh: '她的哥哥是醫生。' },
        { en: 'This book is <b>mine</b>.', zh: '這本書是我的。' },
        { en: 'That car is <b>theirs</b>.', zh: '那輛車是他們的。' },
        { en: "This is <b>Tom's</b> laptop.", zh: '這是 Tom 的筆電。' },
        { en: '<b>Whose</b> jacket is this?', zh: '這是誰的外套？' }
      ],
      preClassGuidance: { text: '請觀察以下句子中粗體的字。它們都和「擁有」有關。你能分辨哪些是放在名詞前面的，哪些是獨立使用的？', examples: "My name is Lisa. / This book is mine. / Her brother is a doctor. / This is Tom's laptop." },
      exercises: [
        { type: 'fill', question: 'That is not my bag. It is _____ (she).', hint: '空格後面沒有名詞，需要用所有格形容詞還是所有格代名詞？', answer: 'hers', explanation: '後面沒有接名詞，需要用所有格代名詞 "hers"（= her bag）。' },
        { type: 'fill', question: '_____ (Who) umbrella is this?', hint: '問「誰的」雨傘，用哪個疑問詞？', answer: 'Whose', explanation: '詢問「誰的」用 "Whose"，不是 "Who"。完整句子：Whose umbrella is this?' }
      ],
      summary: ['所有格形容詞放在名詞前面（my book）', '所有格代名詞取代名詞，獨立使用（This is mine.）', "名詞所有格加 's（Tom's）", '用 Whose 詢問「誰的」'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'The children love _____ (they) teacher.', hint: '需要一個放在名詞「teacher」前面的所有格，「they」的所有格形容詞是什麼？', answer: 'their', explanation: '"they" 的所有格形容詞是 "their"。完整句子：The children love their teacher.（孩子們喜愛他們的老師。）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'This phone is not _____ (I). It is _____ (you).', hint: '兩個空格後面都沒有名詞，需要用什麼形式？', answer: 'mine, yours', explanation: '兩者後面都沒有名詞，用所有格代名詞。"I" → "mine"，"you" → "yours"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: "_____ is the best project? Is it the _____ (girl) project or the _____ (boy) project?", hint: '第一格問「誰的」，後兩格是名詞所有格。', answer: "Whose, girls', boys'", explanation: "詢問「誰的」用 \"Whose\"。\"girls\" 和 \"boys\" 是複數名詞，所有格只加 '。" }
      ]
    },

    'a1-6': {
      id: 'a1-6',
      level: 'a1',
      unitNumber: 6,
      title: '[A1] 地方介係詞',
      titleEn: 'Prepositions of Place — In, On, At, Under, Next to',
      description: '學習描述物品或人的位置，掌握 in、on、at、under、next to、between、behind、in front of 等介係詞。',
      rules: [
        { title: '規則一：in（在⋯裡面）', desc: '表示在一個封閉或有邊界的空間內部。', pattern: 'in the box / in the room / in the city / in Taiwan / in the car' },
        { title: '規則二：on（在⋯上面）', desc: '表示在表面上，有接觸面的。', pattern: 'on the table / on the wall / on the floor / on the bus' },
        { title: '規則三：at（在⋯地點）', desc: '表示在某個特定地點或位置，通常指一個點。', pattern: 'at school / at home / at the bus stop / at the door' },
        { title: '規則四：其他常見位置介係詞', desc: '描述更精確的相對位置關係。', pattern: 'under (下方) / next to (旁邊) / between (之間) / behind (後面) / in front of (前面)' }
      ],
      examples: [
        { en: 'The keys are <b>in</b> my bag.', zh: '鑰匙在我的包包裡。' },
        { en: 'The book is <b>on</b> the desk.', zh: '書在桌上。' },
        { en: 'She is waiting <b>at</b> the bus stop.', zh: '她在公車站等。' },
        { en: 'The cat is <b>under</b> the table.', zh: '貓在桌子底下。' },
        { en: 'The bank is <b>next to</b> the post office.', zh: '銀行在郵局旁邊。' },
        { en: 'He is standing <b>behind</b> me.', zh: '他站在我後面。' },
        { en: 'The park is <b>between</b> the school and the hospital.', zh: '公園在學校和醫院之間。' }
      ],
      preClassGuidance: { text: '請觀察以下句子中的介係詞（粗體字）。它們分別描述了什麼樣的位置關係？', examples: 'in my bag / on the desk / at the bus stop / under the table / next to the post office' },
      exercises: [
        { type: 'fill', question: 'The milk is _____ the fridge.', hint: '冰箱是一個封閉的空間，東西在冰箱「裡面」應該用哪個介係詞？', answer: 'in', explanation: '冰箱是封閉空間，東西在裡面用 "in"。' },
        { type: 'fill', question: 'There is a picture _____ the wall.', hint: '畫掛在牆壁「上」，和牆壁有接觸面。', answer: 'on', explanation: '圖畫在牆壁表面上，有接觸，用 "on"。' }
      ],
      summary: ['in：在封閉空間裡面（in the box, in the room）', 'on：在表面上（on the table, on the wall）', 'at：在特定地點（at school, at home）', 'under/behind/next to/between/in front of：描述相對位置'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'I left my phone _____ the kitchen table.', hint: '手機放在桌子「上面」（表面）。', answer: 'on', explanation: '手機在桌子表面上，用 "on"。完整句子：I left my phone on the kitchen table.（我把手機放在廚房桌上了。）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'She works _____ a hospital _____ Taipei.', hint: '在醫院（特定工作地點）用什麼？在台北（城市裡面）用什麼？', answer: 'at, in', explanation: '特定工作地點用 "at"（at a hospital）；在城市裡用 "in"（in Taipei）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'The pharmacy is _____ the bookstore and the café. The bus stop is _____ _____ _____ the pharmacy.', hint: '藥局在書店和咖啡廳「之間」。公車站在藥局「前面」。', answer: 'between, in front of', explanation: '「之間」用 "between"；「前面」用 "in front of"。' }
      ]
    },

    'a1-7': {
      id: 'a1-7',
      level: 'a1',
      unitNumber: 7,
      title: '[A1] There is / There are 句型',
      titleEn: 'There is / There are',
      description: '學習使用 There is 和 There are 來描述某個地方「有」某樣東西的存在，以及其否定和疑問形式。',
      rules: [
        { title: '規則一：單數用 There is', desc: '當描述的是單數可數名詞或不可數名詞時，使用 there is（縮寫 there\'s）。', pattern: "There is a cat on the sofa. / There is some water in the glass." },
        { title: '規則二：複數用 There are', desc: '當描述的是複數名詞時，使用 there are。', pattern: 'There are three books on the desk. / There are many people in the park.' },
        { title: '規則三：否定句', desc: '否定句在 is/are 後加 not。常和 any 搭配。', pattern: "There is not (isn't) any milk. / There are not (aren't) any chairs." },
        { title: '規則四：疑問句', desc: '將 is/are 和 there 對調即可形成疑問句。', pattern: 'Is there a bathroom nearby? / Are there any questions?' }
      ],
      examples: [
        { en: '<b>There is</b> a supermarket near my house.', zh: '我家附近有一間超市。' },
        { en: '<b>There are</b> 30 students in my class.', zh: '我的班上有 30 個學生。' },
        { en: '<b>There is</b> some milk in the fridge.', zh: '冰箱裡有一些牛奶。' },
        { en: '<b>There isn\'t</b> any sugar left.', zh: '沒有糖了。' },
        { en: '<b>Are there</b> any good restaurants here?', zh: '這裡有好的餐廳嗎？' },
        { en: '<b>There are</b> two bedrooms in the apartment.', zh: '這間公寓有兩間臥室。' }
      ],
      preClassGuidance: { text: '請觀察以下句子，它們都是在描述某個地方「有」什麼。什麼時候用 "There is"，什麼時候用 "There are"？', examples: 'There is a supermarket nearby. / There are 30 students. / There isn\'t any sugar. / Are there any restaurants?' },
      exercises: [
        { type: 'fill', question: 'There _____ a park near the school.', hint: '「a park」是單數名詞，應該用 is 還是 are？', answer: 'is', explanation: '「a park」是單數，用 "There is"。' },
        { type: 'fill', question: '_____ there any eggs in the refrigerator?', hint: '「eggs」是複數名詞，疑問句開頭要用什麼？', answer: 'Are', explanation: '「eggs」是複數，疑問句用 "Are there"。' }
      ],
      summary: ['There is + 單數名詞/不可數名詞', 'There are + 複數名詞', '否定句加 not，常搭配 any', '疑問句將 is/are 移至 there 前面', 'There is/are 用來描述「存在」，不是用來描述「位置」'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'There _____ seven days in a week.', hint: '「seven days」是複數。', answer: 'are', explanation: '「seven days」是複數，用 "There are"。完整句子：There are seven days in a week.（一週有七天。）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '_____ there _____ (some/any) water in the bottle?', hint: '疑問句中通常用 some 還是 any？water 是可數還是不可數？', answer: 'Is, any', explanation: '疑問句用 "any"（不是 "some"）。"water" 是不可數名詞，用 "Is"。完整句子：Is there any water in the bottle?' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'There _____ a bed, a desk, and two chairs in my room. _____ there a TV?', hint: '第一句雖然有複數物品，但主要動詞和最靠近它的名詞一致。第二句只問一個 TV。', answer: 'is, Is', explanation: '在英文口語中，"There is" 常用於列舉開頭為單數的項目（a bed）。問一台 TV 用 "Is there"。' }
      ]
    },

    'a1-8': {
      id: 'a1-8',
      level: 'a1',
      unitNumber: 8,
      title: '[A1] 情態動詞 Can/Can\'t',
      titleEn: 'Modal Verb — Can / Cannot',
      description: '學習使用 can 表達能力（會/能）和許可（可以），以及 can\'t 的否定用法和疑問句結構。',
      rules: [
        { title: '規則一：can 的基本用法', desc: 'can + 原形動詞，表示「會、能夠」。can 對所有主詞都一樣，動詞不需要任何變化。', pattern: 'I can swim. / She can speak English. / They can play guitar.' },
        { title: '規則二：否定用 cannot / can\'t', desc: '否定形式是 cannot（連寫）或縮寫 can\'t，後接原形動詞。', pattern: "I can't drive. / He cannot cook." },
        { title: '規則三：疑問句結構', desc: '將 can 移到主詞前面即可形成疑問句。', pattern: 'Can you swim? / Can she speak French? — Yes, I can. / No, I can\'t.' },
        { title: '規則四：表示許可', desc: 'can 除了表「能力」，也可表示「許可」（可以/允許做某事）。', pattern: 'Can I go to the bathroom? / You can sit here.' }
      ],
      examples: [
        { en: 'I <b>can</b> speak three languages.', zh: '我會說三種語言。' },
        { en: 'She <b>can\'t</b> play the piano.', zh: '她不會彈鋼琴。' },
        { en: '<b>Can</b> you help me?', zh: '你能幫我嗎？' },
        { en: 'He <b>can</b> run very fast.', zh: '他能跑得很快。' },
        { en: 'We <b>cannot</b> park here.', zh: '我們不能在這裡停車。' },
        { en: '<b>Can</b> I use your phone?', zh: '我可以用你的手機嗎？' }
      ],
      preClassGuidance: { text: '請觀察以下句子。"can" 的後面接的是什麼形式的動詞？注意看看 "can" 有沒有隨主詞改變形式。', examples: 'I can speak. / She can\'t play. / Can you help? / He can run. / Can I use your phone?' },
      exercises: [
        { type: 'fill', question: 'She _____ (can / swim) very well.', hint: 'can 後面的動詞需要什麼形式？', answer: 'can swim', explanation: '"can" 後面接原形動詞 "swim"，不加 s。' },
        { type: 'fill', question: '_____ your little brother _____ (read)?', hint: '疑問句中 can 放在哪個位置？動詞用什麼形式？', answer: 'Can, read', explanation: '疑問句 "Can" 在主詞前面，動詞用原形 "read"。' }
      ],
      summary: ['can + 原形動詞，所有主詞形式相同', '否定：cannot / can\'t + 原形動詞', '疑問：Can + 主詞 + 原形動詞？', 'can 可表示「能力」或「許可」', '回答：Yes, I can. / No, I can\'t.'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Birds _____ fly, but dogs _____.', hint: '鳥會飛，狗不會。', answer: "can, can't", explanation: 'Birds can fly, but dogs can\'t.（鳥會飛，但狗不會。）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '_____ I _____ (open) the window? It is very hot.', hint: '這是在「請求許可」。疑問句中 can 放在哪裡？', answer: 'Can, open', explanation: '請求許可用 "Can I..."。動詞用原形 "open"。完整句子：Can I open the window?（我可以打開窗戶嗎？）' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'My grandmother _____ (can / speak) English, but she _____ (not / can / write) it.', hint: '她會說但不會寫。注意 can\'t 的完整否定形式。', answer: "can speak, can't write", explanation: '肯定：can speak；否定：can\'t write。注意 can\'t 後面也是接原形動詞。' }
      ]
    },

    'a1-9': {
      id: 'a1-9',
      level: 'a1',
      unitNumber: 9,
      title: '[A1] 祈使句與 Let\'s',
      titleEn: 'Imperatives & Let\'s',
      description: '學習如何使用祈使句來發出指令、請求、建議或邀請，以及 Let\'s 的用法。',
      rules: [
        { title: '規則一：祈使句的基本結構', desc: '祈使句直接用原形動詞開頭，省略主詞 "You"。可以是命令、指示，也可以是友好的邀請。', pattern: 'Open the door. / Sit down, please. / Come here.' },
        { title: '規則二：否定祈使句', desc: '否定祈使句以 "Don\'t" 開頭，表示「不要做某事」。', pattern: "Don't run in the hallway. / Don't touch that. / Don't be late." },
        { title: '規則三：使用 please 使語氣更禮貌', desc: 'please 可置於句首或句尾，使祈使句的語氣變得更加禮貌。', pattern: 'Please close the window. / Close the window, please.' },
        { title: '規則四：Let\'s 表示建議', desc: 'Let\'s（= Let us）+ 原形動詞，用來提出建議或邀請對方一起做某事。', pattern: "Let's go! / Let's eat lunch. / Let's not argue." }
      ],
      examples: [
        { en: '<b>Listen</b> carefully.', zh: '仔細聽。' },
        { en: '<b>Please</b> turn off the lights.', zh: '請關燈。' },
        { en: '<b>Don\'t</b> worry about it.', zh: '別擔心。' },
        { en: '<b>Don\'t</b> be noisy in the library.', zh: '在圖書館不要吵鬧。' },
        { en: '<b>Let\'s</b> take a break.', zh: '我們休息一下吧。' },
        { en: '<b>Let\'s not</b> waste time.', zh: '我們別浪費時間了。' }
      ],
      preClassGuidance: { text: '請觀察以下句子。它們有一個共同特點：都沒有明確的主詞。你能猜到這類句子是在對「誰」說話嗎？', examples: "Listen carefully. / Please turn off the lights. / Don't worry. / Let's take a break." },
      exercises: [
        { type: 'fill', question: '_____ (not / use) your phone during class.', hint: '否定祈使句的開頭是什麼？', answer: "Don't use", explanation: '否定祈使句用 "Don\'t + 原形動詞"。' },
        { type: 'fill', question: '_____ go to the movies tonight!', hint: '邀請對方一起做某事，開頭用什麼？', answer: "Let's", explanation: '邀請一起做某事用 "Let\'s"。' }
      ],
      summary: ['祈使句用原形動詞開頭，省略主詞', '否定祈使句用 Don\'t + 原形動詞', 'please 放在句首或句尾可使語氣更禮貌', 'Let\'s + 原形動詞 表示邀請/建議'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '_____ down, please. (sit)', hint: '祈使句用動詞的什麼形式開頭？', answer: 'Sit', explanation: '祈使句用原形動詞開頭。完整句子：Sit down, please.（請坐下。）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: "_____ (not / be) afraid. Everything will be fine.", hint: '否定祈使句加上 Be 動詞時怎麼寫？', answer: "Don't be", explanation: "否定祈使句：Don't + 原形動詞。Be 的原形就是 \"be\"。完整句子：Don't be afraid.（不要害怕。）" },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: "_____ not _____ (eat) too much junk food. _____ _____ (cook) something healthy instead!", hint: '第一句是否定建議（Let\'s not...），第二句是肯定建議（Let\'s...）。', answer: "Let's, eat, Let's, cook", explanation: "否定建議：Let's not eat...。肯定建議：Let's cook...。" }
      ]
    },

    'a1-10': {
      id: 'a1-10',
      level: 'a1',
      unitNumber: 10,
      title: '[A1] 疑問詞 Wh- Questions',
      titleEn: 'Question Words — What, Where, Who, When, Why, How',
      description: '學習使用 What、Where、Who、When、Why、How 等疑問詞來造出資訊型問句，獲取更具體的回答。',
      rules: [
        { title: '規則一：What（什麼）', desc: '詢問事物、資訊或選擇。', pattern: 'What is your name? / What do you like? / What time is it?' },
        { title: '規則二：Where / When / Who', desc: 'Where 詢問地點；When 詢問時間；Who 詢問人物。', pattern: 'Where do you live? / When is the meeting? / Who is that man?' },
        { title: '規則三：Why / How', desc: 'Why 詢問原因；How 詢問方式或狀態。', pattern: 'Why are you late? / How are you? / How do you go to work?' },
        { title: '規則四：疑問詞 + 助動詞 + 主詞 + 動詞', desc: '大部分 Wh- 問句的結構是：疑問詞 + 助動詞（do/does/is/are/can）+ 主詞 + 原形動詞。但 Who/What 當主詞時不需要助動詞。', pattern: '一般：Where do you live? ｜ Who 當主詞：Who likes chocolate? (不需 does)' }
      ],
      examples: [
        { en: '<b>What</b> is your favorite color?', zh: '你最喜歡的顏色是什麼？' },
        { en: '<b>Where</b> does she work?', zh: '她在哪裡工作？' },
        { en: '<b>Who</b> is your best friend?', zh: '誰是你最好的朋友？' },
        { en: '<b>When</b> do you usually wake up?', zh: '你通常幾點起床？' },
        { en: '<b>Why</b> are you so happy?', zh: '你為什麼這麼開心？' },
        { en: '<b>How</b> do you go to school?', zh: '你怎麼去上學？' },
        { en: '<b>How many</b> brothers do you have?', zh: '你有幾個兄弟？' }
      ],
      preClassGuidance: { text: '請觀察以下問句。每個問句的開頭都是一個不同的疑問詞。你能根據回答的類型推測每個疑問詞的意思嗎？', examples: 'What is your name? / Where does she work? / Who is your friend? / When do you wake up? / Why are you happy? / How do you go to school?' },
      exercises: [
        { type: 'fill', question: '_____ do you live? — I live in Kaohsiung.', hint: '回答是一個「地點」（Kaohsiung），應該用哪個疑問詞？', answer: 'Where', explanation: '詢問地點用 "Where"。' },
        { type: 'fill', question: '_____ is the concert? — It is on Friday.', hint: '回答是一個「時間」（Friday），應該用哪個疑問詞？', answer: 'When', explanation: '詢問時間用 "When"。' }
      ],
      summary: ['What = 什麼、Where = 哪裡、Who = 誰', 'When = 什麼時候、Why = 為什麼、How = 如何', '句型：疑問詞 + 助動詞 + 主詞 + 動詞', 'Who/What 當主詞時不需助動詞（Who likes...?）', 'How many/How much/How old 等組合可詢問數量、價格、年齡'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '_____ old are you? — I am 25 years old.', hint: '詢問「年齡」，How 後面加什麼？', answer: 'How', explanation: '詢問年齡用 "How old"。完整句子：How old are you?（你幾歲了？）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '_____ _____ (teach) this class? — Mr. Chen teaches this class.', hint: '「Who」在這裡是當主詞，主詞是第三人稱單數。注意：Who 當主詞時不需要助動詞。', answer: 'Who teaches', explanation: '「Who」當主詞，後面直接接第三人稱單數動詞 "teaches"（不用 does）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '_____ _____ books does she have? — She has about 200 books. / _____ does she keep them? — She keeps them _____ her bedroom.', hint: '第一句問「多少」書；第二句問「哪裡」；最後一格是介係詞。', answer: 'How many, Where, in', explanation: '詢問可數名詞數量用 "How many"。詢問地點用 "Where"。臥室是封閉空間，用 "in"。' }
      ]
    },

    // =====================
    // A2 UNITS
    // =====================
    'a2-1': {
      id: 'a2-1',
      level: 'a2',
      unitNumber: 1,
      title: '[A2] 現在進行式',
      titleEn: 'Present Continuous',
      description: '學習如何使用「be + V-ing」結構來描述正在進行的動作，以及現在進行式與現在簡單式的區別。',

      rules: [
        {
          title: '規則一：現在進行式的基本結構',
          desc: '現在進行式由「Be 動詞 + 動詞-ing」組成，表示「正在做某事」。',
          pattern: 'Subject + am/is/are + Verb-ing'
        },
        {
          title: '規則二：動詞加 -ing 的變化規則',
          desc: '大部分動詞直接加 -ing。以 e 結尾去 e 加 -ing。短母音+子音結尾，雙寫子音加 -ing。',
          pattern: 'play → playing ｜ make → making ｜ run → running ｜ sit → sitting'
        },
        {
          title: '規則三：否定句與疑問句',
          desc: '否定句在 Be 動詞後加 not。疑問句將 Be 動詞移至主詞前面。結構和 Be 動詞的句型相同。',
          pattern: '否定：Subject + am/is/are + not + V-ing ｜ 疑問：Am/Is/Are + Subject + V-ing?'
        },
        {
          title: '規則四：現在進行式 vs. 現在簡單式',
          desc: '現在進行式表示「此刻正在做」的動作；現在簡單式表示「習慣性、經常性」的動作或事實。',
          pattern: 'I am eating lunch now. (此刻) vs. I eat lunch at noon every day. (習慣)'
        }
      ],

      examples: [
        { en: 'I <b>am reading</b> a book right now.', zh: '我現在正在讀一本書。' },
        { en: 'She <b>is cooking</b> dinner.', zh: '她正在做晚餐。' },
        { en: 'They <b>are playing</b> soccer in the park.', zh: '他們正在公園踢足球。' },
        { en: 'He <b>is not sleeping</b>.', zh: '他沒有在睡覺。' },
        { en: '<b>Are</b> you <b>listening</b> to me?', zh: '你在聽我說話嗎？' },
        { en: 'The baby <b>is crying</b>.', zh: '寶寶正在哭。' },
        { en: 'Look! It <b>is snowing</b> outside!', zh: '看！外面正在下雪！' }
      ],

      preClassGuidance: {
        text: '請觀察以下句子，每個句子都有兩個動詞部分。你能找出它們的共同模式嗎？為什麼要用兩個動詞？',
        examples: 'I am reading. / She is cooking. / They are playing. / He is not sleeping. / Are you listening?'
      },

      exercises: [
        {
          type: 'fill',
          question: 'Look! The children _____ (play) in the garden.',
          hint: '「Look!」表示正在發生的事情，需要用哪種時態？「The children」搭配哪個 Be 動詞？',
          answer: 'are playing',
          explanation: '「Look!」暗示此刻正在發生的事，用現在進行式。「The children」是複數，搭配 "are"，加上 "playing"。'
        },
        {
          type: 'fill',
          question: 'She _____ (not / eat) now. She _____ (study).',
          hint: '兩個空格都需要用現在進行式。「She」搭配哪個 Be 動詞？',
          answer: 'is not eating, is studying',
          explanation: '「She」搭配 "is"。否定：is not eating。注意 "study" 直接加 -ing 變成 "studying"（y 前面是母音 d 所以不變化）。'
        }
      ],

      summary: [
        '現在進行式 = Be 動詞 + V-ing',
        '使用時機：描述「此刻正在進行」的動作',
        '常見時間標記：now, right now, at the moment, Look!',
        '動詞加 -ing 要注意去 e、雙寫子音等規則',
        '與現在簡單式的區別：進行式=此刻 / 簡單式=習慣'
      ],

      comprehensiveExercises: [
        {
          difficulty: 'basic',
          difficultyZh: '基礎',
          question: 'Tom _____ (write) an email right now.',
          hint: '「right now」表示什麼時間？Tom 是第三人稱單數，搭配什麼 Be 動詞？',
          answer: 'is writing',
          explanation: '「right now」表示此刻，用現在進行式。Tom 搭配 "is"。"write" 去 e 加 -ing 變成 "writing"。完整句子：Tom is writing an email right now.（Tom 此刻正在寫一封電子郵件。）'
        },
        {
          difficulty: 'advanced',
          difficultyZh: '進階',
          question: '_____ the students _____ (sit) in the classroom now?',
          hint: '這是疑問句，「the students」是複數。疑問句的 Be 動詞放在哪裡？「sit」加 -ing 需要什麼變化？',
          answer: 'Are, sitting',
          explanation: '疑問句 Be 動詞放在主詞前。「the students」是複數用 "Are"。"sit" 是短母音+子音結尾，雙寫 t 加 -ing，變成 "sitting"。完整句子：Are the students sitting in the classroom now?（學生們現在坐在教室裡嗎？）'
        },
        {
          difficulty: 'challenge',
          difficultyZh: '挑戰',
          question: '選擇正確的時態填空：She usually _____ (drink) tea, but today she _____ (drink) coffee.',
          hint: '第一個空格有 "usually"（表示習慣），第二個空格有 "today"（表示現在的情況）。兩個需要用不同的時態。',
          answer: 'drinks, is drinking',
          explanation: '"usually" 表示習慣性動作，用現在簡單式，She + drinks（第三人稱加 s）。"today" 搭配當下正在做的事，用現在進行式 "is drinking"。這題展示了兩種時態的核心區別。'
        }
      ]
    },

    'a2-2': {
      id: 'a2-2',
      level: 'a2',
      unitNumber: 2,
      title: '[A2] 過去簡單式',
      titleEn: 'Past Simple',
      description: '學習如何使用過去簡單式描述已經完成的動作或過去的狀態，包含規則動詞與不規則動詞的變化。',

      rules: [
        {
          title: '規則一：Be 動詞的過去式',
          desc: 'Be 動詞在過去式只有兩種形式：was 和 were。I/he/she/it 用 was；you/we/they 用 were。',
          pattern: 'I/He/She/It → was ｜ You/We/They → were'
        },
        {
          title: '規則二：規則動詞加 -ed',
          desc: '大部分動詞在字尾加 -ed 即可形成過去式。以 e 結尾只加 -d。以子音 + y 結尾去 y 加 -ied。',
          pattern: 'play → played ｜ live → lived ｜ study → studied ｜ stop → stopped'
        },
        {
          title: '規則三：不規則動詞',
          desc: '許多常用動詞的過去式是不規則變化，沒有固定規律，需要記憶。',
          pattern: 'go → went ｜ eat → ate ｜ see → saw ｜ have → had ｜ come → came'
        },
        {
          title: '規則四：否定句與疑問句使用 did',
          desc: '否定句使用 did not (didn\'t) + 原形動詞。疑問句使用 Did + 主詞 + 原形動詞。注意：用了 did 之後，動詞要恢復原形。',
          pattern: '否定：Subject + did not + V(原形) ｜ 疑問：Did + Subject + V(原形)?'
        }
      ],

      examples: [
        { en: 'I <b>was</b> tired yesterday.', zh: '我昨天很累。' },
        { en: 'They <b>were</b> at the park last Sunday.', zh: '他們上星期天在公園。' },
        { en: 'She <b>played</b> tennis last weekend.', zh: '她上週末打了網球。' },
        { en: 'He <b>went</b> to Tokyo last year.', zh: '他去年去了東京。' },
        { en: 'We <b>did not</b> (didn\'t) <b>see</b> the movie.', zh: '我們沒有看那部電影。' },
        { en: '<b>Did</b> you <b>eat</b> breakfast this morning?', zh: '你今天早上吃了早餐嗎？' }
      ],

      preClassGuidance: {
        text: '請觀察以下句子中的動詞。它們和現在式有什麼不同？你能發現哪些動詞的變化是有規律的，哪些看起來完全不同？',
        examples: 'She played tennis. / He went to Tokyo. / We did not see the movie. / Did you eat breakfast?'
      },

      exercises: [
        {
          type: 'fill',
          question: 'I _____ (visit) my grandmother last weekend.',
          hint: '「last weekend」是過去的時間。「visit」是規則動詞，過去式怎麼變化？',
          answer: 'visited',
          explanation: '「last weekend」表示過去，用過去簡單式。「visit」是規則動詞，直接加 -ed，變成 "visited"。'
        },
        {
          type: 'fill',
          question: 'He _____ (not / go) to school yesterday.',
          hint: '否定句的過去式需要用到什麼助動詞？用了助動詞後，動詞要用什麼形式？',
          answer: 'did not go',
          explanation: '過去式否定句用 "did not"（didn\'t）+ 原形動詞 "go"。注意：不是 "did not went"！'
        }
      ],

      summary: [
        'Be 動詞過去式：was（I/he/she/it）、were（you/we/they）',
        '規則動詞過去式加 -ed（注意 -d, -ied, 雙寫子音等變化）',
        '不規則動詞需要個別記憶（go→went, eat→ate 等）',
        '否定句和疑問句用 did + 原形動詞',
        '常見過去式時間標記：yesterday, last week, ago, in 2020'
      ],

      comprehensiveExercises: [
        {
          difficulty: 'basic',
          difficultyZh: '基礎',
          question: 'We _____ (be) very happy at the party.',
          hint: '「We」搭配哪個 Be 動詞的過去式？',
          answer: 'were',
          explanation: '「We」是複數主詞，Be 動詞過去式用 "were"。完整句子：We were very happy at the party.（我們在派對上非常開心。）'
        },
        {
          difficulty: 'advanced',
          difficultyZh: '進階',
          question: '_____ she _____ (buy) a new phone last month?',
          hint: '這是過去式的疑問句。疑問句開頭用什麼？「buy」的過去式是什麼？但是用了助動詞後呢？',
          answer: 'Did, buy',
          explanation: '過去式疑問句用 "Did" 開頭，動詞恢復原形 "buy"（不是 bought）。完整句子：Did she buy a new phone last month?（她上個月買了新手機嗎？）'
        },
        {
          difficulty: 'challenge',
          difficultyZh: '挑戰',
          question: 'Yesterday I _____ (wake) up early, _____ (have) breakfast, and _____ (drive) to work.',
          hint: '三個動詞都需要過去式。它們都是不規則動詞，想想看它們各自的過去式形式。',
          answer: 'woke, had, drove',
          explanation: '三個都是不規則動詞：wake → woke, have → had, drive → drove。完整句子：Yesterday I woke up early, had breakfast, and drove to work.（昨天我早起，吃了早餐，然後開車去上班。）'
        }
      ]
    },

    'a2-3': {
      id: 'a2-3',
      level: 'a2',
      unitNumber: 3,
      title: '[A2] 未來式 — Will & Be Going To',
      titleEn: 'Future Tense — Will & Be Going To',
      description: '學習兩種最常見的未來式表達方式：will 和 be going to。了解它們的結構差異與語境使用時機。',

      rules: [
        {
          title: '規則一：Will 的基本結構',
          desc: 'will + 原形動詞，表示對未來的預測、當下的決定，或表達意願和承諾。will 對所有主詞相同，不需要變化。',
          pattern: 'Subject + will + Verb(原形) ｜ 否定：will not (won\'t) ｜ 疑問：Will + Subject + V?'
        },
        {
          title: '規則二：Be Going To 的基本結構',
          desc: 'be going to + 原形動詞，表示已經計劃好的未來行動，或根據現有跡象做出的預測。',
          pattern: 'Subject + am/is/are + going to + Verb(原形)'
        },
        {
          title: '規則三：Will vs. Be Going To 的使用差異',
          desc: '瞬間決定用 will（"I\'ll help you."）；事先計劃用 be going to（"I\'m going to visit Tokyo next month."）。根據跡象預測用 be going to（"Look at the clouds. It\'s going to rain."）。',
          pattern: '瞬間決定 → will ｜ 事先計劃 → be going to ｜ 跡象預測 → be going to'
        },
        {
          title: '規則四：常見未來式時間標記',
          desc: '未來式常搭配表示未來時間的詞語使用。',
          pattern: 'tomorrow / next week / next year / soon / in the future / later'
        }
      ],

      examples: [
        { en: 'I <b>will help</b> you with your homework.', zh: '我會幫你做功課。（當下決定）' },
        { en: 'She <b>will be</b> 20 years old next month.', zh: '她下個月就 20 歲了。（預測/事實）' },
        { en: 'It <b>won\'t</b> rain tomorrow.', zh: '明天不會下雨。' },
        { en: 'I <b>am going to</b> travel to Europe this summer.', zh: '我今年夏天打算去歐洲旅行。（計劃）' },
        { en: 'Look at those dark clouds. It <b>is going to</b> rain.', zh: '看那些烏雲。快要下雨了。（跡象）' },
        { en: '<b>Will</b> you <b>come</b> to the party?', zh: '你會來派對嗎？' },
        { en: '<b>Are</b> you <b>going to buy</b> a new car?', zh: '你打算買一輛新車嗎？' }
      ],

      preClassGuidance: {
        text: '請觀察以下句子。它們都在描述「未來」的事情，但使用了兩種不同的結構。你能分辨出哪些是「臨時決定」，哪些是「事先計劃」嗎？',
        examples: 'I will help you. / I am going to travel to Europe. / It is going to rain. / Will you come? / She will be 20.'
      },

      exercises: [
        {
          type: 'fill',
          question: 'I _____ (help) you carry those bags. (看到別人拿很多袋子，臨時決定要幫忙)',
          hint: '這是一個「臨時決定」的情境，應該用 will 還是 be going to？',
          answer: 'will help',
          explanation: '看到情況後「臨時決定」要幫忙，用 "will help"。這不是事先計劃好的動作。'
        },
        {
          type: 'fill',
          question: 'We _____ (visit) our grandparents next Sunday. We already bought the train tickets.',
          hint: '已經買好車票了！這表示是臨時決定還是事先計劃？',
          answer: 'are going to visit',
          explanation: '已經買好車票，表示這是「事先計劃好的」行動，用 "are going to visit"。'
        }
      ],

      summary: [
        'will + 原形動詞：用於瞬間決定、預測、承諾',
        'be going to + 原形動詞：用於事先計劃、根據跡象預測',
        'will 不隨主詞變化；be going to 中的 be 需要變化（am/is/are）',
        '否定：will not (won\'t) / am not/is not/are not going to',
        '選擇 will 還是 be going to 取決於「語境」而非「時間」'
      ],

      comprehensiveExercises: [
        {
          difficulty: 'basic',
          difficultyZh: '基礎',
          question: 'I think it _____ (be) sunny tomorrow.',
          hint: '用「I think」開頭表示個人對未來的「預測」，這種情境通常用哪個未來式？',
          answer: 'will be',
          explanation: '「I think...」後面接對未來的預測，一般使用 "will"。完整句子：I think it will be sunny tomorrow.（我認為明天會是晴天。）'
        },
        {
          difficulty: 'advanced',
          difficultyZh: '進階',
          question: 'She _____ (not / go) to the meeting tomorrow. She already told her boss.',
          hint: '她已經跟老闆說了，這表示是事先做好的決定。否定的 be going to 怎麼寫？',
          answer: 'is not going to go',
          explanation: '已經告訴老闆了，表示是「事先決定」，用 "be going to" 的否定形式。She + "is not going to go"。完整句子：She is not going to go to the meeting tomorrow.（她明天不打算去開會。）'
        },
        {
          difficulty: 'challenge',
          difficultyZh: '挑戰',
          question: '情境選擇：電話響了，你說：「I _____ (get) it!」／你跟朋友說：「I _____ (move) to a new apartment next month. I signed the lease last week.」',
          hint: '第一個是聽到電話後的「即時反應」，第二個是已經簽了租約的「計劃」。',
          answer: "will get, am going to move",
          explanation: '電話響了，即時回應 "I\'ll get it!"（will 用於臨時決定）。搬家已經簽好租約，是事先計劃 "I am going to move"。這完美展示了 will vs. be going to 的核心差異。'
        }
      ]
    },

    'a2-4': {
      id: 'a2-4',
      level: 'a2',
      unitNumber: 4,
      title: '[A2] 可數與不可數名詞',
      titleEn: 'Countable & Uncountable Nouns — Some, Any, Much, Many',
      description: '學習區分可數與不可數名詞，掌握 some、any、much、many、a lot of、a few、a little 等量詞的使用時機。',
      rules: [
        { title: '規則一：可數名詞 vs. 不可數名詞', desc: '可數名詞可以用數字計算（one apple, two apples）。不可數名詞無法直接計算，沒有複數形式（water, rice, information）。', pattern: '可數：apple, book, chair ｜ 不可數：water, money, music, advice' },
        { title: '規則二：some 與 any', desc: 'some 用於肯定句，any 用於否定句和疑問句。some 偶爾也用於「期望對方說好」的疑問句中。', pattern: '肯定：I have some milk. ｜ 否定：I don\'t have any sugar. ｜ 疑問：Do you have any questions?' },
        { title: '規則三：many / much / a lot of', desc: 'many 搭配可數名詞複數；much 搭配不可數名詞。a lot of 可搭配兩者，較口語化。', pattern: 'many books / much water / a lot of books / a lot of water' },
        { title: '規則四：a few / a little', desc: 'a few 搭配可數名詞（幾個）；a little 搭配不可數名詞（一點）。', pattern: 'a few friends (幾個朋友) / a little money (一點錢)' }
      ],
      examples: [
        { en: 'I need <b>some</b> sugar for the cake.', zh: '我做蛋糕需要一些糖。' },
        { en: 'There isn\'t <b>any</b> milk left.', zh: '沒有牛奶了。' },
        { en: 'She has <b>many</b> friends at school.', zh: '她在學校有很多朋友。' },
        { en: 'He doesn\'t have <b>much</b> free time.', zh: '他沒有太多空閒時間。' },
        { en: 'We have <b>a lot of</b> homework tonight.', zh: '我們今晚有很多功課。' },
        { en: 'I only have <b>a few</b> coins.', zh: '我只有幾個硬幣。' },
        { en: 'Add <b>a little</b> salt to the soup.', zh: '加一點鹽到湯裡。' }
      ],
      preClassGuidance: { text: '請觀察以下名詞，哪些可以在前面加上 one, two, three 來計算？哪些不行？', examples: 'book, water, chair, money, apple, music, egg, rice, information, friend' },
      exercises: [
        { type: 'fill', question: 'How _____ (much/many) eggs do we need?', hint: '「eggs」是可數名詞複數，詢問數量要用 much 還是 many？', answer: 'many', explanation: '「eggs」是可數名詞，用 "many"。How many eggs do we need?' },
        { type: 'fill', question: 'There is _____ (a few/a little) coffee in the cup.', hint: '「coffee」是不可數名詞，搭配 a few 還是 a little？', answer: 'a little', explanation: '「coffee」是不可數名詞，用 "a little"。' }
      ],
      summary: ['可數名詞可以計算、有複數形式；不可數名詞不能直接計算', 'some 用於肯定句；any 用於否定句和疑問句', 'many + 可數；much + 不可數；a lot of 兩者皆可', 'a few + 可數（幾個）；a little + 不可數（一點）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Do you have _____ (some/any) brothers or sisters?', hint: '這是一個疑問句。', answer: 'any', explanation: '疑問句用 "any"。完整句子：Do you have any brothers or sisters?（你有兄弟姊妹嗎？）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'She doesn\'t have _____ (much/many) experience, but she has _____ (much/many) good ideas.', hint: '「experience」是不可數名詞，「ideas」是可數名詞。', answer: 'much, many', explanation: '"experience" 是不可數名詞用 "much"；"ideas" 是可數名詞用 "many"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'I have _____ (a few/a little) time before the meeting. Let me answer _____ (a few/a little) emails first.', hint: '「time」是不可數名詞；「emails」是可數名詞。', answer: 'a little, a few', explanation: '"time" 是不可數名詞用 "a little"；"emails" 是可數名詞用 "a few"。' }
      ]
    },

    'a2-5': {
      id: 'a2-5',
      level: 'a2',
      unitNumber: 5,
      title: '[A2] 比較級與最高級',
      titleEn: 'Comparatives & Superlatives',
      description: '學習如何使用形容詞的比較級（-er / more）和最高級（-est / most）來比較人事物的差異。',
      rules: [
        { title: '規則一：短形容詞的比較級', desc: '一到兩個音節的短形容詞，加 -er 形成比較級，加 -est 形成最高級。比較兩者時用 than。', pattern: 'tall → taller → tallest ｜ big → bigger → biggest ｜ easy → easier → easiest' },
        { title: '規則二：長形容詞用 more / most', desc: '兩個音節以上的長形容詞，前面加 more 形成比較級，加 most 形成最高級。', pattern: 'beautiful → more beautiful → most beautiful ｜ expensive → more expensive → most expensive' },
        { title: '規則三：不規則比較級', desc: '有些常用形容詞的比較級和最高級是不規則的。', pattern: 'good → better → best ｜ bad → worse → worst ｜ far → farther → farthest' },
        { title: '規則四：比較句型', desc: '比較級用 "than"；最高級用 "the + 最高級 + in/of"。', pattern: '比較：A is taller than B. ｜ 最高級：She is the tallest in the class.' }
      ],
      examples: [
        { en: 'Tom is <b>taller than</b> Jerry.', zh: 'Tom 比 Jerry 高。' },
        { en: 'This book is <b>more interesting than</b> that one.', zh: '這本書比那本有趣。' },
        { en: 'She is <b>the smartest</b> student in the class.', zh: '她是班上最聰明的學生。' },
        { en: 'Today is <b>hotter than</b> yesterday.', zh: '今天比昨天熱。' },
        { en: 'This is <b>the most expensive</b> restaurant in town.', zh: '這是城裡最貴的餐廳。' },
        { en: 'My English is <b>better than</b> my French.', zh: '我的英文比法文好。' }
      ],
      preClassGuidance: { text: '請觀察以下句子。有些形容詞加了 -er/-est，有些前面放了 more/most。你能找出規律嗎？', examples: 'taller than / more interesting than / the smartest / the most expensive / better than' },
      exercises: [
        { type: 'fill', question: 'My house is _____ (big) than yours.', hint: '「big」是短形容詞（一個音節），比較級怎麼變？注意拼寫規則。', answer: 'bigger', explanation: '"big" 是短母音+子音結尾，雙寫 g 加 -er，變成 "bigger"。' },
        { type: 'fill', question: 'This is the _____ (beautiful) park in the city.', hint: '「beautiful」是長形容詞（三個音節），最高級需要什麼？記得加 the。', answer: 'most beautiful', explanation: '"beautiful" 是長形容詞，最高級用 "most beautiful"。' }
      ],
      summary: ['短形容詞加 -er（比較級）/ -est（最高級）', '長形容詞用 more（比較級）/ most（最高級）', '不規則：good→better→best, bad→worse→worst', '比較級 + than；最高級前面加 the', '最高級常搭配 in（地方/群體）或 of（範圍）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Summer is _____ (hot) than spring.', hint: '「hot」是短形容詞，注意拼寫變化。', answer: 'hotter', explanation: '"hot" 是短母音+子音結尾，雙寫 t 加 -er，變成 "hotter"。完整句子：Summer is hotter than spring.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'Who is _____ (good) at math, you or your sister?', hint: '「good」的比較級是不規則的。', answer: 'better', explanation: '"good" 的比較級是 "better"（不是 gooder）。完整句子：Who is better at math, you or your sister?' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'Mount Everest is _____ _____ (high) mountain in the world. It is _____ (high) _____ Mont Blanc.', hint: '第一句是最高級（世界上最高的山）；第二句是比較級（比白朗峰高）。', answer: 'the highest, higher, than', explanation: '最高級：the highest mountain。比較級：higher than。完整句子：Mount Everest is the highest mountain in the world. It is higher than Mont Blanc.' }
      ]
    },

    'a2-6': {
      id: 'a2-6',
      level: 'a2',
      unitNumber: 6,
      title: '[A2] 頻率副詞',
      titleEn: 'Adverbs of Frequency — Always, Usually, Sometimes, Never',
      description: '學習使用頻率副詞來描述動作發生的頻繁程度，掌握它們在句子中的正確位置。',
      rules: [
        { title: '規則一：常見頻率副詞（由高到低）', desc: '頻率副詞表示動作發生的頻率，從 100% 到 0%。', pattern: 'always (總是) → usually (通常) → often (經常) → sometimes (有時) → rarely/seldom (很少) → never (從不)' },
        { title: '規則二：位置在一般動詞前面', desc: '頻率副詞放在一般動詞的「前面」。', pattern: 'I always eat breakfast. / She never drinks coffee.' },
        { title: '規則三：位置在 Be 動詞後面', desc: '頻率副詞放在 Be 動詞的「後面」。', pattern: 'He is always happy. / They are usually on time.' },
        { title: '規則四：sometimes 的彈性位置', desc: 'sometimes 比較特殊，除了放在動詞前，也可以放在句首或句尾。', pattern: 'Sometimes I walk to school. / I walk to school sometimes.' }
      ],
      examples: [
        { en: 'I <b>always</b> brush my teeth before bed.', zh: '我睡前總是刷牙。' },
        { en: 'She <b>usually</b> gets up at 7 a.m.', zh: '她通常早上七點起床。' },
        { en: 'We <b>often</b> go hiking on weekends.', zh: '我們週末經常去健行。' },
        { en: '<b>Sometimes</b> he forgets his keys.', zh: '他有時候會忘記帶鑰匙。' },
        { en: 'They <b>rarely</b> eat out.', zh: '他們很少在外面吃飯。' },
        { en: 'I <b>never</b> watch horror movies.', zh: '我從不看恐怖電影。' },
        { en: 'The bus is <b>always</b> late.', zh: '公車總是遲到。' }
      ],
      preClassGuidance: { text: '請觀察以下句子中粗體副詞的位置。它們放在句子的哪個位置？和 Be 動詞或一般動詞的相對位置有什麼規律？', examples: 'I always eat breakfast. / She is always happy. / Sometimes he forgets. / They rarely eat out.' },
      exercises: [
        { type: 'fill', question: 'She _____ (never / be) late for class.', hint: '「never」搭配 Be 動詞時，頻率副詞放在 Be 動詞的哪個位置？', answer: 'is never', explanation: '頻率副詞放在 Be 動詞後面。She + is + never。完整句子：She is never late for class.' },
        { type: 'fill', question: 'I _____ (usually / have) coffee in the morning.', hint: '「usually」搭配一般動詞 have 時，放在動詞的哪個位置？', answer: 'usually have', explanation: '頻率副詞放在一般動詞前面。完整句子：I usually have coffee in the morning.' }
      ],
      summary: ['頻率副詞表示動作發生的頻率（always→never）', '放在一般動詞「前面」', '放在 Be 動詞「後面」', 'sometimes 可放在句首、動詞前、句尾', 'never 本身已含否定意義，句子不再加 not'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'The weather here _____ (be / always) warm.', hint: 'Be 動詞和頻率副詞的順序是什麼？', answer: 'is always', explanation: '頻率副詞在 Be 動詞後面。完整句子：The weather here is always warm.（這裡的天氣總是溫暖的。）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'My father _____ (rarely / cook), but he _____ (always / wash) the dishes.', hint: '兩個都是一般動詞，頻率副詞放在一般動詞的哪裡？注意第三人稱單數。', answer: 'rarely cooks, always washes', explanation: '頻率副詞在一般動詞前面。第三人稱單數動詞加 s。rarely cooks / always washes。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '重新排列：school / I / on time / to / am / usually / .', hint: '先組織基本句型（I am to school），再把頻率副詞放到正確位置。', answer: 'I am usually on time to school.', explanation: '基本句：I am on time to school。頻率副詞 "usually" 放在 Be 動詞 "am" 後面。' }
      ]
    },

    'a2-7': {
      id: 'a2-7',
      level: 'a2',
      unitNumber: 7,
      title: '[A2] 情態動詞 Must / Should / Have to',
      titleEn: 'Modal Verbs — Must, Should, Have to',
      description: '學習使用 must、should、have to 表達義務、建議和必要性，並理解它們之間的語氣差異。',
      rules: [
        { title: '規則一：must（必須）', desc: 'must + 原形動詞，表示強烈的義務或必要性（說話者認為必須做）。否定 must not / mustn\'t 表示「禁止」。', pattern: 'You must wear a seatbelt. / You must not smoke here.' },
        { title: '規則二：should（應該）', desc: 'should + 原形動詞，表示建議或勸告（語氣比 must 溫和）。否定 should not / shouldn\'t 表示「不應該」。', pattern: 'You should eat more vegetables. / You shouldn\'t stay up too late.' },
        { title: '規則三：have to（不得不）', desc: 'have to + 原形動詞，表示外在規則或情況要求必須做某事。第三人稱用 has to。', pattern: 'I have to work on Saturday. / She has to go to the dentist.' },
        { title: '規則四：must vs. have to vs. should', desc: 'must = 個人認為必須（內在義務）；have to = 規則或情況要求（外在義務）；should = 建議（非強制）。', pattern: '強度：must > have to > should' }
      ],
      examples: [
        { en: 'You <b>must</b> stop at a red light.', zh: '你必須在紅燈時停下來。' },
        { en: 'You <b>mustn\'t</b> use your phone while driving.', zh: '開車時禁止使用手機。' },
        { en: 'You <b>should</b> drink more water.', zh: '你應該多喝水。' },
        { en: 'You <b>shouldn\'t</b> skip breakfast.', zh: '你不應該跳過早餐。' },
        { en: 'I <b>have to</b> finish this report by Friday.', zh: '我必須在星期五之前完成這份報告。' },
        { en: 'She <b>has to</b> take medicine every day.', zh: '她每天必須吃藥。' }
      ],
      preClassGuidance: { text: '請觀察以下三組句子。它們都在表達「應該做某事」，但語氣強度不同。你能感受到差異嗎？', examples: 'You must stop. / You have to finish the report. / You should drink water.' },
      exercises: [
        { type: 'fill', question: 'Students _____ (must / not) use their phones during exams.', hint: '考試時使用手機是「被禁止的」，語氣很強。', answer: 'must not', explanation: '"must not" 表示「禁止」。考試中使用手機是被嚴格禁止的行為。' },
        { type: 'fill', question: 'She _____ (have to) wake up early because her job starts at 7.', hint: '因為工作（外在原因）而必須早起。「She」是第三人稱單數，have to 怎麼變？', answer: 'has to', explanation: '"She" 是第三人稱單數，"have to" 變成 "has to"。' }
      ],
      summary: ['must：強制義務/禁止（mustn\'t）', 'should：建議/勸告（較溫和）', 'have to：外在規則要求（第三人稱用 has to）', '三者後面都接原形動詞', 'must not = 禁止；don\'t have to = 不需要（不同意義！）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'You look tired. You _____ (should) go to bed early tonight.', hint: '這是善意的「建議」，用哪一個？', answer: 'should', explanation: '建議用 "should"。完整句子：You should go to bed early tonight.（你今晚應該早點睡。）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'My brother _____ (have to) wear a uniform at school, but I don\'t.', hint: '「My brother」是第三人稱單數。', answer: 'has to', explanation: '"My brother" 是第三人稱單數，用 "has to"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '注意區別：You _____ (must not) park here — it\'s illegal. / You _____ (not / have to) pay — the ticket is free.', hint: '第一句是「禁止」（違法的），第二句是「不需要」（免費的）。must not 和 don\'t have to 意思完全不同！', answer: "must not, don't have to", explanation: '"must not" = 禁止（不可以停車）。"don\'t have to" = 不需要（票是免費的，不用付錢）。這兩個意思非常不同！' }
      ]
    },

    'a2-8': {
      id: 'a2-8',
      level: 'a2',
      unitNumber: 8,
      title: '[A2] 時間介係詞',
      titleEn: 'Prepositions of Time — In, On, At',
      description: '學習在不同時間表達中正確使用 in、on、at 這三個最常見的時間介係詞。',
      rules: [
        { title: '規則一：at 用於精確時刻', desc: 'at 用於具體的時間點，也用於固定搭配。', pattern: 'at 7 o\'clock / at noon / at midnight / at night / at the weekend (英式)' },
        { title: '規則二：on 用於特定日期和星期', desc: 'on 用於特定的一天或日期。', pattern: 'on Monday / on January 1st / on my birthday / on Christmas Day' },
        { title: '規則三：in 用於較長或不精確的時間', desc: 'in 用於月份、年份、季節、世紀，以及一天中的某個時段（但不是 night）。', pattern: 'in March / in 2024 / in summer / in the morning / in the afternoon' },
        { title: '規則四：不使用介係詞的情況', desc: '在 today, tomorrow, yesterday, this, last, next, every 前面不加介係詞。', pattern: 'today / tomorrow morning / last Monday / next year / every day' }
      ],
      examples: [
        { en: 'The meeting starts <b>at</b> 3 p.m.', zh: '會議下午三點開始。' },
        { en: 'I was born <b>on</b> March 15th.', zh: '我出生於三月十五日。' },
        { en: 'We go swimming <b>in</b> summer.', zh: '我們夏天去游泳。' },
        { en: 'She exercises <b>in</b> the morning.', zh: '她早上運動。' },
        { en: 'I have a dentist appointment <b>on</b> Friday.', zh: '我星期五有看牙醫的預約。' },
        { en: 'The shop opens <b>at</b> 9 o\'clock.', zh: '商店九點開門。' },
        { en: 'He moved to Japan <b>in</b> 2020.', zh: '他在 2020 年搬到日本。' }
      ],
      preClassGuidance: { text: '請觀察以下時間詞語分別搭配了哪個介係詞。in, on, at 各自搭配的時間範圍大小有什麼規律？', examples: 'at 3 p.m. / on March 15th / in summer / in the morning / on Friday / at 9 o\'clock / in 2020' },
      exercises: [
        { type: 'fill', question: 'The concert is _____ Saturday evening.', hint: '「Saturday evening」是某一天的某個時段。當日期和時間結合時，用 on（因為有特定的一天）。', answer: 'on', explanation: '有特定的某一天（Saturday）時用 "on"，即使後面接時段（evening）也是用 "on"。' },
        { type: 'fill', question: 'She was born _____ 1998.', hint: '「1998」是一個年份，年份前面用什麼介係詞？', answer: 'in', explanation: '年份前面用 "in"。She was born in 1998.' }
      ],
      summary: ['at：精確時刻（at 3 p.m., at noon, at night）', 'on：特定的一天（on Monday, on July 4th）', 'in：月份、年份、季節、時段（in March, in 2024, in the morning）', 'today, tomorrow, last, next, every 前不加介係詞'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'I usually wake up _____ 6:30 _____ the morning.', hint: '6:30 是精確時間點；morning 是一天中的時段。', answer: 'at, in', explanation: '精確時間用 "at"（at 6:30）；一天中的時段用 "in"（in the morning）。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'The festival is _____ October. It starts _____ October 10th.', hint: '第一句是月份（較長時段），第二句是特定日期。', answer: 'in, on', explanation: '月份用 "in"（in October）；特定日期用 "on"（on October 10th）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'We are going to Paris _____ next summer. We will arrive _____ June 15th _____ the afternoon.', hint: '「next summer」前面需要介係詞嗎？「June 15th」是特定日期。「the afternoon」是時段但搭配了日期。', answer: '(nothing), on, in', explanation: '"next summer" 前不加介係詞。"June 15th" 用 "on"。"the afternoon" 用 "in"。完整句子：We are going to Paris next summer. We will arrive on June 15th in the afternoon.' }
      ]
    },

    'a2-9': {
      id: 'a2-9',
      level: 'a2',
      unitNumber: 9,
      title: '[A2] 現在完成式入門',
      titleEn: 'Present Perfect — Introduction',
      description: '初步認識現在完成式的基本結構（have/has + 過去分詞），學習用它來描述「經驗」和「到目前為止的結果」。',
      rules: [
        { title: '規則一：現在完成式的結構', desc: '現在完成式由「have/has + 過去分詞（past participle）」組成。I/You/We/They 用 have；He/She/It 用 has。', pattern: 'I have visited Paris. / She has finished her homework.' },
        { title: '規則二：規則動詞的過去分詞', desc: '規則動詞的過去分詞和過去式相同，都是加 -ed。', pattern: 'play → played → played ｜ visit → visited → visited' },
        { title: '規則三：不規則動詞的過去分詞', desc: '不規則動詞的過去分詞需要特別記憶，有些和過去式不同。', pattern: 'go → went → gone ｜ eat → ate → eaten ｜ see → saw → seen ｜ do → did → done' },
        { title: '規則四：表達「經驗」', desc: '現在完成式常用來表示「曾經做過」某事，搭配 ever（曾經）和 never（從未）。', pattern: 'I have been to Japan. / Have you ever eaten sushi? / She has never seen snow.' }
      ],
      examples: [
        { en: 'I <b>have visited</b> London twice.', zh: '我去過倫敦兩次。' },
        { en: 'She <b>has never eaten</b> Thai food.', zh: '她從未吃過泰國菜。' },
        { en: '<b>Have</b> you <b>ever seen</b> a shooting star?', zh: '你曾看過流星嗎？' },
        { en: 'He <b>has lost</b> his keys.', zh: '他把鑰匙弄丟了。（現在還沒找到）' },
        { en: 'We <b>have finished</b> the project.', zh: '我們已經完成了這個專案。' },
        { en: 'I <b>have just</b> arrived.', zh: '我剛剛到達。' }
      ],
      preClassGuidance: { text: '請觀察以下句子中的動詞結構。它們都包含 "have/has" + 另一個動詞形式。這個動詞形式和過去式一樣嗎？', examples: 'I have visited London. / She has never eaten Thai food. / Have you ever seen a star? / He has lost his keys.' },
      exercises: [
        { type: 'fill', question: 'I _____ (have / be) to New York three times.', hint: '「have been to」是表示「去過某地」的固定說法。', answer: 'have been', explanation: '"have been to" 是固定用法，表示「去過某地」。' },
        { type: 'fill', question: '_____ you ever _____ (try) Japanese ramen?', hint: '疑問句中 have 放在主詞前面。「try」的過去分詞是什麼？', answer: 'Have, tried', explanation: '疑問句用 "Have you ever + 過去分詞"。"try" 的過去分詞是 "tried"（規則動詞）。' }
      ],
      summary: ['現在完成式 = have/has + 過去分詞', 'I/You/We/They + have；He/She/It + has', '規則動詞過去分詞 = 動詞 + -ed（和過去式相同）', '不規則動詞過去分詞需個別記憶', '常搭配 ever, never, just, already, yet 使用'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'She _____ (have / read) that book already.', hint: '「She」是第三人稱單數，用 have 還是 has？「read」的過去分詞是什麼？', answer: 'has read', explanation: '"She" 用 "has"。"read" 的過去分詞也是 "read"（拼法相同，但發音不同 /rɛd/）。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'I _____ never _____ (fly) in a helicopter. _____ you ever _____ (fly) in one?', hint: '「fly」的過去分詞是什麼？（fly→flew→?）', answer: 'have, flown, Have, flown', explanation: '"fly" 的三態變化是 fly→flew→flown。用 "have never flown" 和 "Have you ever flown"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '比較兩個句子的差異：I _____ (lose 過去式) my wallet yesterday. / I _____ (lose 現在完成式) my wallet. (暗示現在還沒找到)', hint: '第一句有 yesterday（用過去式），第二句暗示現在的狀態（用現在完成式）。', answer: 'lost, have lost', explanation: '過去式 "lost" + yesterday：單純描述過去發生的事。現在完成式 "have lost"：強調到現在的影響（鑰匙現在還丟著）。這就是這兩種時態的核心區別。' }
      ]
    },

    'a2-10': {
      id: 'a2-10',
      level: 'a2',
      unitNumber: 10,
      title: '[A2] 連接詞',
      titleEn: 'Conjunctions — And, But, Or, Because, So',
      description: '學習使用基本連接詞來連結單字、片語和句子，讓表達更流暢、更有邏輯性。',
      rules: [
        { title: '規則一：and（和、而且）', desc: '用來連接相似或並列的元素（單字、片語或句子）。', pattern: 'I like coffee and tea. / She is smart and kind.' },
        { title: '規則二：but（但是）', desc: '用來連接「對比」或「轉折」的內容。', pattern: 'I like coffee, but I don\'t like tea. / He is rich but not happy.' },
        { title: '規則三：or（或者）', desc: '用來表示「選擇」，提供兩個或以上的選項。', pattern: 'Do you want coffee or tea? / We can go today or tomorrow.' },
        { title: '規則四：because（因為）和 so（所以）', desc: 'because 引導「原因」；so 引導「結果」。它們是因果關係的正反面。', pattern: 'I stayed home because it was raining. / It was raining, so I stayed home.' }
      ],
      examples: [
        { en: 'She speaks English <b>and</b> French.', zh: '她會說英語和法語。' },
        { en: 'He is tired <b>but</b> happy.', zh: '他很累但很開心。' },
        { en: 'Would you like rice <b>or</b> noodles?', zh: '你要飯還是麵？' },
        { en: 'I was late <b>because</b> I missed the bus.', zh: '我遲到了，因為我錯過了公車。' },
        { en: 'It was very hot, <b>so</b> we turned on the fan.', zh: '天氣很熱，所以我們開了電風扇。' },
        { en: 'I want to go, <b>but</b> I\'m too busy.', zh: '我想去，但我太忙了。' }
      ],
      preClassGuidance: { text: '請觀察以下句子中的粗體連接詞。每個連接詞前後的內容有什麼關係？是並列、對比、選擇還是因果？', examples: 'and (並列) / but (對比) / or (選擇) / because (原因) / so (結果)' },
      exercises: [
        { type: 'fill', question: 'I like swimming, _____ I don\'t like running.', hint: '前後兩件事是「對比」關係（喜歡 vs. 不喜歡）。', answer: 'but', explanation: '喜歡和不喜歡是「對比」關係，用 "but"。' },
        { type: 'fill', question: 'She studied hard, _____ she passed the exam.', hint: '努力讀書的「結果」是通過考試。', answer: 'so', explanation: '努力讀書→結果通過考試，用 "so" 表示結果。' }
      ],
      summary: ['and：連接並列或相似的元素', 'but：表示對比或轉折', 'or：提供選擇', 'because：引導原因（後接原因）', 'so：引導結果（後接結果）', '因果轉換：because 因為... / so 所以...'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Do you prefer cats _____ dogs?', hint: '提供兩個「選擇」。', answer: 'or', explanation: '提供選擇用 "or"。完整句子：Do you prefer cats or dogs?（你比較喜歡貓還是狗？）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'He didn\'t study, _____ he failed the test. He failed _____ he didn\'t study.', hint: '第一句：沒讀書→結果？第二句：考試不及格→原因？', answer: 'so, because', explanation: '第一句：沒讀書→所以不及格（so）。第二句：不及格→因為沒讀書（because）。兩句意思相同，但因果順序相反。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'She is young _____ talented, _____ she doesn\'t have much experience, _____ many companies still want to hire her _____ she has great potential.', hint: '年輕「和」有才華；「但是」沒經驗；「所以/但是」很多公司想雇用她；「因為」有潛力。', answer: 'and, but, but, because', explanation: 'young and talented（並列）→ but no experience（轉折）→ but companies want her（再轉折）→ because great potential（原因）。' }
      ]
    },

    // =====================
    // B1 UNITS
    // =====================
    'b1-1': {
      id: 'b1-1',
      level: 'b1',
      unitNumber: 1,
      title: '[B1] 現在完成式進階 — For & Since',
      titleEn: 'Present Perfect — For & Since, Already, Yet, Just',
      description: '深入學習現在完成式搭配 for（持續時間）與 since（起始時間），以及 already、yet、just 的用法差異。',
      rules: [
        { title: '規則一：for + 一段時間', desc: 'for 後面接「一段時間的長度」，表示動作持續了多久。', pattern: 'for two years / for a long time / for three hours / for five minutes' },
        { title: '規則二：since + 起始時間點', desc: 'since 後面接「一個特定的時間點」，表示動作從何時開始持續到現在。', pattern: 'since 2020 / since Monday / since I was a child / since last summer' },
        { title: '規則三：already, yet, just 的用法', desc: 'already（已經）用於肯定句，放在 have 和過去分詞之間。yet（還、已經）用於否定句和疑問句，放在句尾。just（剛剛）放在 have 和過去分詞之間。', pattern: 'I have already eaten. / I haven\'t finished yet. / Have you done it yet? / She has just arrived.' },
        { title: '規則四：現在完成式 vs. 過去式', desc: '現在完成式強調「到現在的持續狀態或影響」；過去式強調「過去某個時間點完成的動作」。不能和明確的過去時間搭配。', pattern: '✓ I have lived here for 5 years. (現在還住這裡) ｜ ✓ I lived there in 2010. (以前住那裡) ｜ ✗ I have lived here yesterday.' }
      ],
      examples: [
        { en: 'I <b>have known</b> her <b>for</b> ten years.', zh: '我認識她十年了。' },
        { en: 'She <b>has worked</b> here <b>since</b> 2019.', zh: '她從 2019 年就在這裡工作了。' },
        { en: 'I <b>have already</b> finished my homework.', zh: '我已經完成了我的功課。' },
        { en: 'He <b>hasn\'t</b> called me back <b>yet</b>.', zh: '他還沒回我電話。' },
        { en: '<b>Have</b> you eaten lunch <b>yet</b>?', zh: '你吃午餐了嗎？' },
        { en: 'They <b>have just</b> left the office.', zh: '他們剛離開辦公室。' }
      ],
      preClassGuidance: { text: '請觀察以下句子中 for 和 since 後面分別接什麼類型的時間？一個是「長度」，一個是「起點」，你能分辨嗎？', examples: 'for ten years / since 2019 / for a long time / since Monday / I have already finished. / He hasn\'t called yet.' },
      exercises: [
        { type: 'fill', question: 'We have lived in this city _____ 2015.', hint: '2015 是一個「時間點」，表示從何時開始。', answer: 'since', explanation: '2015 是一個時間點（起始時間），用 "since"。' },
        { type: 'fill', question: 'She has studied English _____ three years.', hint: '「three years」是一段時間的長度。', answer: 'for', explanation: '「three years」是一段時間長度，用 "for"。' }
      ],
      summary: ['for + 一段時間（for two hours, for a year）', 'since + 時間點（since 2020, since Monday）', 'already 用於肯定句，yet 用於否定/疑問句', 'just 表示「剛剛」，放在 have/has 後面', '現在完成式不能搭配明確的過去時間（yesterday, last week）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'I have _____ seen that movie. I saw it last week.', hint: '「已經」看過了，用於肯定句的是哪一個？', answer: 'already', explanation: '"already" 用於肯定句表示已經完成。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'They have been married _____ 20 years. They got married _____ 2004.', hint: '第一個空是「一段時間」，第二個空是「時間點」。', answer: 'for, in', explanation: '20 years 是一段時間用 "for"。2004 搭配過去式用 "in"（不是 since，因為第二句用了 got married 過去式）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '_____ you _____ (finish) the report _____? — No, I haven\'t finished it _____. I\'ve _____ started the introduction.', hint: '疑問句用 yet；否定也用 yet；「只」完成了開頭用 just 還是 only？', answer: 'Have, finished, yet, yet, just', explanation: '疑問句：Have you finished yet?｜否定：haven\'t finished yet｜just started = 才剛開始。' }
      ]
    },

    'b1-2': {
      id: 'b1-2',
      level: 'b1',
      unitNumber: 2,
      title: '[B1] 過去進行式',
      titleEn: 'Past Continuous',
      description: '學習使用「was/were + V-ing」描述過去某個時間點正在進行的動作，以及與過去簡單式搭配使用的技巧。',
      rules: [
        { title: '規則一：過去進行式的結構', desc: '過去進行式 = was/were + V-ing，表示過去某一刻「正在進行」的動作。', pattern: 'I/He/She/It + was + V-ing ｜ You/We/They + were + V-ing' },
        { title: '規則二：描述過去某時刻正在做的事', desc: '用來描述在過去某一個特定的時間點正在發生的動作。', pattern: 'At 8 p.m. last night, I was watching TV.' },
        { title: '規則三：when + 過去式，過去進行式', desc: '當兩個過去事件交錯時，「較長的背景動作」用過去進行式，「突然發生的短動作」用過去簡單式。用 when 或 while 連接。', pattern: 'I was cooking when the phone rang. / While I was sleeping, it started to rain.' },
        { title: '規則四：兩個同時進行的動作', desc: '兩個在過去同時進行的較長動作，都用過去進行式，通常用 while 連接。', pattern: 'While I was reading, she was cooking.' }
      ],
      examples: [
        { en: 'I <b>was reading</b> a book at 9 p.m. last night.', zh: '我昨晚九點正在看書。' },
        { en: 'She <b>was walking</b> home <b>when</b> it <b>started</b> to rain.', zh: '她正在走路回家時，開始下雨了。' },
        { en: '<b>While</b> he <b>was driving</b>, he <b>saw</b> an accident.', zh: '他開車時看到了一場車禍。' },
        { en: 'They <b>were watching</b> TV <b>while</b> I <b>was studying</b>.', zh: '他們在看電視的同時我在讀書。' },
        { en: 'What <b>were</b> you <b>doing</b> at 3 p.m. yesterday?', zh: '你昨天下午三點在做什麼？' },
        { en: 'The children <b>were playing</b> when the bell <b>rang</b>.', zh: '鈴響的時候孩子們正在玩。' }
      ],
      preClassGuidance: { text: '請觀察以下句子。每個句子都包含兩個事件。哪個事件持續比較久（背景動作）？哪個是突然發生的？', examples: 'She was walking when it started to rain. / While he was driving, he saw an accident. / The children were playing when the bell rang.' },
      exercises: [
        { type: 'fill', question: 'I _____ (sleep) when the earthquake _____ (happen).', hint: '睡覺是持續的背景動作（過去進行式），地震是突然發生的（過去簡單式）。', answer: 'was sleeping, happened', explanation: '睡覺是較長的背景動作→ was sleeping（過去進行式）。地震是突然插入的→ happened（過去簡單式）。' },
        { type: 'fill', question: 'What _____ you _____ (do) at 7 a.m. this morning?', hint: '詢問過去某時刻正在做什麼，用什麼時態？', answer: 'were, doing', explanation: '詢問過去某時刻的動作用過去進行式。What were you doing at 7 a.m.?' }
      ],
      summary: ['過去進行式 = was/were + V-ing', '描述過去某時刻正在進行的動作', 'when + 短動作（過去式），背景動作用過去進行式', 'while + 過去進行式，表示較長的背景動作', '兩個同時進行的動作都用過去進行式'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'At midnight, we _____ still _____ (work) on the project.', hint: '午夜是過去的時間點，正在做的事用什麼時態？', answer: 'were, working', explanation: '描述過去某時刻正在進行的動作用 "were working"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'While she _____ (take) a shower, someone _____ (knock) on the door.', hint: '洗澡是較長的動作（過去進行式），敲門是突然的（過去簡單式）。', answer: 'was taking, knocked', explanation: '較長的背景動作 "was taking"；突然的短動作 "knocked"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'Yesterday at 6 p.m., Mom _____ (cook) dinner, Dad _____ (read) the newspaper, and I _____ (do) my homework when the power suddenly _____ (go) out.', hint: '三個人同時進行的動作（過去進行式），然後停電突然發生（過去簡單式）。', answer: 'was cooking, was reading, was doing, went', explanation: '三個同時進行的背景動作都用過去進行式。"go out"（停電）是突然發生的短動作，用過去簡單式 "went"。' }
      ]
    },

    'b1-3': {
      id: 'b1-3',
      level: 'b1',
      unitNumber: 3,
      title: '[B1] 現在完成進行式',
      titleEn: 'Present Perfect Continuous',
      description: '學習使用「have/has been + V-ing」強調動作的持續性和持續時間，並區分它與現在完成式的差異。',
      rules: [
        { title: '規則一：結構', desc: '現在完成進行式 = have/has + been + V-ing，強調動作從過去開始「一直持續到現在」，且可能繼續。', pattern: 'I have been waiting for 30 minutes. / She has been studying all day.' },
        { title: '規則二：強調持續性和時間長度', desc: '比起現在完成式，現在完成進行式更強調動作的「持續性」和「過程」。常搭配 for 和 since。', pattern: '強調持續：I have been reading this book for two weeks. (還在讀) ｜ 強調完成：I have read this book. (讀完了)' },
        { title: '規則三：解釋目前可見的結果', desc: '也用來解釋為什麼目前有某種狀態或跡象。', pattern: 'Her eyes are red. She has been crying. / The ground is wet. It has been raining.' },
        { title: '規則四：不能用於非持續性動詞', desc: '表示狀態的動詞（stative verbs）不能用進行式：know, believe, like, want, own, belong 等。', pattern: '✓ I have known him for years. ｜ ✗ I have been knowing him for years.' }
      ],
      examples: [
        { en: 'I <b>have been waiting</b> for the bus <b>for</b> 20 minutes.', zh: '我已經等公車等了 20 分鐘了。' },
        { en: 'She <b>has been learning</b> Japanese <b>since</b> last year.', zh: '她從去年就一直在學日文。' },
        { en: 'You look tired. <b>Have</b> you <b>been working</b> all night?', zh: '你看起來很累。你整晚都在工作嗎？' },
        { en: 'It <b>has been raining</b> all morning.', zh: '整個早上都在下雨。' },
        { en: 'He <b>has been playing</b> piano since he was five.', zh: '他從五歲就開始彈鋼琴了。' },
        { en: 'My hands are dirty. I <b>have been gardening</b>.', zh: '我的手很髒。我一直在園藝。' }
      ],
      preClassGuidance: { text: '比較以下兩組句子的微妙差異：「I have read 3 books.」vs.「I have been reading all day.」第一個強調什麼？第二個強調什麼？', examples: 'I have read 3 books. (完成) / I have been reading all day. (持續) / She has been running. She is sweating. (結果)' },
      exercises: [
        { type: 'fill', question: 'Your eyes are red. _____ you _____ (cry)?', hint: '眼睛紅可能是因為「一直在哭」，用什麼時態強調持續？', answer: 'Have, been crying', explanation: '用現在完成進行式解釋目前狀態的原因。Have you been crying?' },
        { type: 'fill', question: 'We _____ (wait) here for over an hour!', hint: '等了超過一小時，而且現在還在等，強調持續。', answer: 'have been waiting', explanation: '強調持續進行中的動作用 "have been waiting"。' }
      ],
      summary: ['have/has + been + V-ing', '強調動作的持續性（vs. 現在完成式強調結果/完成）', '常搭配 for / since', '可解釋目前可見的狀態或結果', '非持續性動詞（know, like, want）不能用'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'She _____ (has / work) here since January.', hint: '從一月到現在一直在工作，強調持續。', answer: 'has been working', explanation: '從一月持續到現在用 "has been working"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '選擇正確的時態：I _____ (read) three chapters today. 但 I _____ (read) this novel for a week now.', hint: '第一句強調「完成的量」（3章），第二句強調「持續的時間」（一週了）。', answer: 'have read, have been reading', explanation: '強調完成的數量→ have read（現在完成式）。強調持續的過程→ have been reading（現在完成進行式）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'The roads are wet. It _____ (rain). But look, the sun is out now — it _____ (stop) finally.', hint: '路是濕的→因為一直在下雨（持續性解釋）。太陽出來→雨停了（完成）。', answer: 'has been raining, has stopped', explanation: '解釋地面潮濕用 "has been raining"（持續性）。雨已經停了用 "has stopped"（完成結果）。' }
      ]
    },

    'b1-4': {
      id: 'b1-4',
      level: 'b1',
      unitNumber: 4,
      title: '[B1] 第一條件句 — If + 現在式, will',
      titleEn: 'First Conditional — If + Present, Will',
      description: '學習用第一條件句來表達「有可能發生的未來情境」以及其結果，掌握 if 子句和主要子句的時態規則。',
      rules: [
        { title: '規則一：第一條件句的結構', desc: 'If + 現在簡單式, 主詞 + will + 原形動詞。用來描述「未來有可能（likely）發生的事」。', pattern: 'If it rains, I will stay home. / If you study hard, you will pass.' },
        { title: '規則二：if 子句用現在式（不用 will）', desc: '非常重要：if 子句中不能用 will！即使是在描述未來的事，if 後面也必須用現在簡單式。', pattern: '✓ If it rains tomorrow... ｜ ✗ If it will rain tomorrow...' },
        { title: '規則三：兩個子句可以交換順序', desc: 'if 子句可以在前面或後面。if 在前時，中間要加逗號。', pattern: 'If you call me, I will come. = I will come if you call me.' },
        { title: '規則四：也可使用其他情態動詞', desc: '主要子句除了 will，也可以用 can、may、might、should 等。', pattern: 'If you finish early, you can leave. / If it snows, we might cancel the trip.' }
      ],
      examples: [
        { en: '<b>If</b> you <b>eat</b> too much, you <b>will feel</b> sick.', zh: '如果你吃太多，你會覺得不舒服。' },
        { en: '<b>If</b> she <b>doesn\'t hurry</b>, she <b>will miss</b> the train.', zh: '如果她不趕快，她會錯過火車。' },
        { en: 'I <b>will lend</b> you my car <b>if</b> you <b>need</b> it.', zh: '如果你需要的話，我會把車借你。' },
        { en: '<b>If</b> the weather <b>is</b> nice, we <b>\'ll go</b> for a picnic.', zh: '如果天氣好，我們會去野餐。' },
        { en: '<b>If</b> you <b>don\'t water</b> the plants, they <b>will die</b>.', zh: '如果你不澆水，植物會死掉。' },
        { en: 'You <b>can stay</b> here <b>if</b> you <b>want</b>.', zh: '如果你想的話，你可以留在這裡。' }
      ],
      preClassGuidance: { text: '請觀察以下條件句。if 後面的動詞用什麼時態？主要子句用什麼時態？注意：這些都是「未來可能發生」的事。', examples: 'If it rains, I will stay home. / If you eat too much, you will feel sick. / You can stay if you want.' },
      exercises: [
        { type: 'fill', question: 'If she _____ (study) hard, she _____ (pass) the exam.', hint: 'if 後面用現在式，主要子句用 will + 原形動詞。', answer: 'studies, will pass', explanation: 'If 子句用現在式 "studies"（第三人稱加 s），主要子句用 "will pass"。' },
        { type: 'fill', question: 'I _____ (not / go) to the beach if it _____ (rain) tomorrow.', hint: '注意：主要子句否定用 won\'t，if 子句不能用 will。', answer: "won't go, rains", explanation: '主要子句否定："won\'t go"。If 子句用現在式 "rains"（不是 will rain）。' }
      ],
      summary: ['結構：If + 現在式, will + 原形動詞', '描述未來「可能發生」的情境', 'if 子句中絕對不能用 will', '兩個子句順序可調換（if 在前要加逗號）', '主要子句也可用 can, may, might, should'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'If you _____ (be) late, the teacher _____ (be) angry.', hint: 'if 後面的 be 動詞要用現在式。', answer: 'are, will be', explanation: 'If 子句用現在式 "are"；主要子句用 "will be"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'I _____ (buy) a new laptop if I _____ (save) enough money.', hint: '這是未來可能的情境：如果存夠錢（if 子句），就買筆電（主要子句）。', answer: 'will buy, save', explanation: '主要子句 "will buy"；If 子句用現在式 "save"（不是 will save）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '改錯：If it will snow tomorrow, we will build a snowman. If we will finish early, we can go home.', hint: '兩個句子的 if 子句都犯了同一個錯誤。', answer: 'If it snows tomorrow, we will build a snowman. If we finish early, we can go home.', explanation: 'If 子句不能用 will！改為現在式：it "snows" 和 we "finish"。' }
      ]
    },

    'b1-5': {
      id: 'b1-5',
      level: 'b1',
      unitNumber: 5,
      title: '[B1] 第二條件句 — If + 過去式, would',
      titleEn: 'Second Conditional — If + Past, Would',
      description: '學習用第二條件句來表達「不太可能或假想的情境」，掌握與第一條件句的差異。',
      rules: [
        { title: '規則一：第二條件句的結構', desc: 'If + 過去簡單式, 主詞 + would + 原形動詞。用來描述「不太可能、假想性或與現實相反」的情境。', pattern: 'If I won the lottery, I would travel the world.' },
        { title: '規則二：If I were（虛擬語氣）', desc: '在第二條件句中，be 動詞傳統上不論主詞一律用 "were"（虛擬語氣），特別是在正式場合。口語中也常用 was。', pattern: 'If I were you, I would apologize. / If she were here, she would help us.' },
        { title: '規則三：第一條件句 vs. 第二條件句', desc: '第一條件句 = 未來可能發生；第二條件句 = 不太可能/假想。', pattern: '可能：If it rains, I will stay home. (天氣預報說可能下雨) ｜ 假想：If it rained in the desert, flowers would grow. (沙漠下雨不太可能)' },
        { title: '規則四：用來給建議', desc: '「If I were you, I would...」是給建議的經典句型。', pattern: 'If I were you, I would see a doctor. / If I were you, I wouldn\'t quit my job.' }
      ],
      examples: [
        { en: '<b>If</b> I <b>had</b> more money, I <b>would buy</b> a bigger house.', zh: '如果我有更多錢，我會買一間更大的房子。' },
        { en: '<b>If</b> I <b>were</b> you, I <b>would</b> accept the offer.', zh: '如果我是你，我會接受那個提議。' },
        { en: '<b>If</b> he <b>spoke</b> Chinese, he <b>could</b> work in Taiwan.', zh: '如果他會說中文，他就能在台灣工作。' },
        { en: 'What <b>would</b> you <b>do</b> <b>if</b> you <b>found</b> a wallet on the street?', zh: '如果你在街上撿到一個錢包，你會怎麼做？' },
        { en: 'She <b>would travel</b> more <b>if</b> she <b>had</b> more vacation days.', zh: '如果她有更多假期，她會更常旅行。' }
      ],
      preClassGuidance: { text: '比較以下兩組：「If I have time, I will help you.」vs.「If I had time, I would help you.」第一句暗示「有可能有時間」，第二句暗示「其實沒有時間」。', examples: 'If I had wings, I would fly. / If I were the president, I would change the law. / What would you do if you won the lottery?' },
      exercises: [
        { type: 'fill', question: 'If I _____ (be) you, I _____ (not / eat) that.', hint: '「如果我是你」的 be 動詞用什麼形式（虛擬語氣）？', answer: 'were, would not eat', explanation: '虛擬語氣用 "were"（不是 was）。主要子句用 "would not eat"。' },
        { type: 'fill', question: 'What _____ you _____ (do) if you _____ (win) a million dollars?', hint: '贏得一百萬不太可能發生，用第二條件句。', answer: 'would, do, won', explanation: '假想的情境用第二條件句。Would you do... if you won...?' }
      ],
      summary: ['結構：If + 過去式, would + 原形動詞', '描述「不太可能」或「假想」的情境', 'Be 動詞在 if 子句中用 were（虛擬語氣）', 'If I were you, I would... 用來給建議', '與第一條件句的區別是「可能性」的高低'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'If I _____ (have) a car, I _____ (drive) to work every day.', hint: '實際上沒有車（假想情境），用第幾條件句？', answer: 'had, would drive', explanation: '假想情境用第二條件句。If I had... I would drive.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '判斷用第一還是第二條件句：If it _____ (rain) tomorrow, I _____ (take) an umbrella. / If it _____ (rain) cats and dogs, I _____ (be) very surprised.', hint: '明天下雨是可能的；下貓下狗是不可能的假想。', answer: 'rains, will take, rained, would be', explanation: '明天可能下雨→第一條件句。下貓下狗不可能→第二條件句。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'If I _____ (be) the manager, I _____ (give) everyone a raise. But I\'m not, so if you _____ (want) a raise, you _____ (have to) talk to the real manager.', hint: '前兩格是假想（不是經理）→第二條件句。後兩格是真實可能→第一條件句。', answer: 'were, would give, want, will have to', explanation: '假想情境（不是經理）→ were / would give。真實情境（想加薪是可能的）→ want / will have to。' }
      ]
    },

    'b1-6': {
      id: 'b1-6',
      level: 'b1',
      unitNumber: 6,
      title: '[B1] 被動語態',
      titleEn: 'Passive Voice — Present & Past',
      description: '學習如何使用被動語態（be + 過去分詞）來改變句子的焦點，從「誰做了什麼」變成「什麼被做了」。',
      rules: [
        { title: '規則一：被動語態的結構', desc: '被動語態 = Be 動詞 + 過去分詞。主動句的受詞變成被動句的主詞。', pattern: '主動：Tom writes the report. → 被動：The report is written by Tom.' },
        { title: '規則二：現在式被動', desc: '現在簡單式的被動用 am/is/are + 過去分詞。', pattern: 'English is spoken in many countries. / These cars are made in Japan.' },
        { title: '規則三：過去式被動', desc: '過去簡單式的被動用 was/were + 過去分詞。', pattern: 'The window was broken yesterday. / The pyramids were built thousands of years ago.' },
        { title: '規則四：by + 執行者（可省略）', desc: '如果要提及動作的執行者，用 "by"。但當執行者不重要、不明確或很明顯時，通常省略。', pattern: '有執行者：The book was written by J.K. Rowling. ｜ 省略：The road is being repaired. (不需要說是誰修的)' }
      ],
      examples: [
        { en: 'English <b>is spoken</b> all over the world.', zh: '英語在全世界被使用。' },
        { en: 'This phone <b>was made</b> in Taiwan.', zh: '這支手機是在台灣製造的。' },
        { en: 'The Mona Lisa <b>was painted</b> <b>by</b> Leonardo da Vinci.', zh: '蒙娜麗莎是達文西畫的。' },
        { en: 'Rice <b>is grown</b> in many Asian countries.', zh: '稻米在許多亞洲國家種植。' },
        { en: 'The thief <b>was caught</b> by the police.', zh: '小偷被警察抓到了。' },
        { en: 'These products <b>are not sold</b> online.', zh: '這些產品不在網上販售。' }
      ],
      preClassGuidance: { text: '請比較以下句子：「The cat ate the fish.」和「The fish was eaten by the cat.」意思一樣嗎？差別是什麼？哪個句子的焦點在「魚」身上？', examples: '主動：Tom broke the window. → 被動：The window was broken by Tom.' },
      exercises: [
        { type: 'fill', question: 'This building _____ (build) in 1990.', hint: '1990 是過去時間。building 是「被建造的」，需要被動語態。', answer: 'was built', explanation: '過去式被動：was + 過去分詞。"build" 的過去分詞是 "built"。' },
        { type: 'fill', question: 'Coffee _____ (grow) in Brazil.', hint: '咖啡是「被種植的」（事實），用現在式被動。', answer: 'is grown', explanation: '一般事實用現在式被動：is + 過去分詞。' }
      ],
      summary: ['被動語態 = be + 過去分詞（p.p.）', '現在被動：am/is/are + p.p.', '過去被動：was/were + p.p.', '用 by 加上執行者（可省略）', '適合使用被動語態：執行者不重要/不明確時'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Spanish _____ (speak) in Mexico.', hint: '西班牙語在墨西哥「被說」，用現在式被動。', answer: 'is spoken', explanation: '一般事實用現在式被動："is spoken"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '改為被動語態：Someone stole my bike yesterday.', hint: '主動句的受詞 "my bike" 變成被動句的主詞。', answer: 'My bike was stolen yesterday.', explanation: '主詞變成 "My bike"，過去式被動用 "was stolen"。執行者 someone 不重要，省略。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'The email _____ (send) yesterday, but the package _____ (not / deliver) yet. It _____ (expect) to arrive tomorrow.', hint: '信已寄出（過去被動）、包裹還沒送到（現在完成被動）、預計明天到（現在被動）。', answer: 'was sent, has not been delivered, is expected', explanation: '過去被動 "was sent"；現在完成被動 "has not been delivered"；現在被動 "is expected"。' }
      ]
    },

    'b1-7': {
      id: 'b1-7',
      level: 'b1',
      unitNumber: 7,
      title: '[B1] 關係子句',
      titleEn: 'Relative Clauses — Who, Which, That, Where',
      description: '學習使用關係代名詞 who、which、that、where 來組成關係子句，為名詞提供額外資訊。',
      rules: [
        { title: '規則一：who（人）', desc: 'who 用來修飾「人」，在關係子句中當主詞或受詞。', pattern: 'The man who lives next door is a doctor. / The girl who I met yesterday is my cousin.' },
        { title: '規則二：which（事物）', desc: 'which 用來修飾「事物或動物」。', pattern: 'The book which I borrowed is very interesting. / The cat which sits on the wall is mine.' },
        { title: '規則三：that（人或事物皆可）', desc: 'that 可以替代 who 或 which，在口語中更常用。但在有逗號的非限定子句中不能用 that。', pattern: 'The man that lives next door... / The book that I borrowed...' },
        { title: '規則四：where（地點）和 when（時間）', desc: 'where 用來修飾地點，when 用來修飾時間。', pattern: 'The restaurant where we ate was excellent. / I remember the day when we first met.' }
      ],
      examples: [
        { en: 'The woman <b>who</b> called you is my boss.', zh: '打電話給你的那位女士是我的老闆。' },
        { en: 'The movie <b>which</b> we watched last night was amazing.', zh: '我們昨晚看的電影太棒了。' },
        { en: 'I like people <b>that</b> are honest.', zh: '我喜歡誠實的人。' },
        { en: 'This is the school <b>where</b> I studied.', zh: '這就是我讀過的學校。' },
        { en: 'The phone <b>that</b> I bought last week is already broken.', zh: '我上週買的手機已經壞了。' },
        { en: 'The hotel <b>where</b> we stayed was near the beach.', zh: '我們住的飯店靠近海灘。' }
      ],
      preClassGuidance: { text: '請觀察以下句子中的 who, which, that, where。它們各自修飾什麼？是修飾「人」、「事物」還是「地點」？', examples: 'The woman who called... / The movie which we watched... / The school where I studied...' },
      exercises: [
        { type: 'fill', question: 'The teacher _____ teaches English is very popular.', hint: '修飾「人」（teacher）用什麼關係代名詞？', answer: 'who', explanation: '修飾人用 "who"（或 "that"）。' },
        { type: 'fill', question: 'The restaurant _____ we had dinner was very expensive.', hint: '修飾「地點」（restaurant）用什麼？', answer: 'where', explanation: '修飾地點用 "where"。' }
      ],
      summary: ['who：修飾人', 'which：修飾事物', 'that：人或事物皆可（口語常用）', 'where：修飾地點', 'when：修飾時間'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'I have a friend _____ speaks five languages.', hint: '修飾 friend（人）。', answer: 'who', explanation: '修飾人用 "who"。完整句子：I have a friend who speaks five languages.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'The city _____ I grew up is not the same anymore. The friends _____ I used to play with have all moved away.', hint: '第一格修飾城市（地點），第二格修飾朋友（人）。', answer: 'where, who', explanation: '修飾地點用 "where"；修飾人用 "who"（或 that）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '合併兩個句子：I bought a laptop. The laptop has a great camera. → I bought a laptop _____ _____ a great camera.', hint: '第二句的 "The laptop" 變成關係代名詞。laptop 是物品。', answer: 'which/that, has', explanation: '用 "which" 或 "that" 連接。完整句子：I bought a laptop which has a great camera.' }
      ]
    },

    'b1-8': {
      id: 'b1-8',
      level: 'b1',
      unitNumber: 8,
      title: '[B1] 動名詞與不定詞',
      titleEn: 'Gerunds & Infinitives — V-ing vs. to + V',
      description: '學習區分哪些動詞後面要接動名詞（V-ing），哪些要接不定詞（to + V），以及接不同形式時意思是否改變。',
      rules: [
        { title: '規則一：後接動名詞（V-ing）的動詞', desc: '有些動詞後面必須接 V-ing 形式。常見的有：enjoy, finish, avoid, mind, suggest, keep, consider, practice。', pattern: 'I enjoy reading. / She finished cooking. / He avoids eating sugar.' },
        { title: '規則二：後接不定詞（to + V）的動詞', desc: '有些動詞後面必須接 to + 原形動詞。常見的有：want, need, decide, plan, hope, expect, agree, learn, promise。', pattern: 'I want to learn. / She decided to leave. / We need to talk.' },
        { title: '規則三：兩者皆可且意思相同的動詞', desc: '有些動詞接 V-ing 或 to + V 意思相同。常見的有：like, love, hate, start, begin, continue。', pattern: 'I like swimming. = I like to swim. / It started raining. = It started to rain.' },
        { title: '規則四：兩者皆可但意思不同的動詞', desc: '有些動詞接不同形式時意思改變。重要的有：remember, forget, stop, try。', pattern: 'I remember locking the door. (記得做過了) ｜ I remembered to lock the door. (記得要去做)' }
      ],
      examples: [
        { en: 'She <b>enjoys swimming</b> in the ocean.', zh: '她喜歡在海裡游泳。' },
        { en: 'I <b>want to visit</b> Japan next year.', zh: '我明年想去日本。' },
        { en: 'He <b>avoided answering</b> my question.', zh: '他迴避回答我的問題。' },
        { en: 'We <b>decided to move</b> to a new city.', zh: '我們決定搬到新的城市。' },
        { en: 'I <b>stopped smoking</b> two years ago.', zh: '我兩年前戒菸了。（停止做某事）' },
        { en: 'I <b>stopped to smoke</b> outside the building.', zh: '我停下來去建築物外面抽菸。（停下來去做某事）' }
      ],
      preClassGuidance: { text: '請比較以下兩組：「I stopped smoking.」（戒菸了）vs.「I stopped to smoke.」（停下來去抽菸）。接 V-ing 和接 to V 意思完全不同！', examples: 'enjoy reading / want to learn / stopped smoking vs. stopped to smoke' },
      exercises: [
        { type: 'fill', question: 'She enjoys _____ (cook) Italian food.', hint: 'enjoy 後面必須接什麼形式？', answer: 'cooking', explanation: '"enjoy" 後面必須接動名詞（V-ing）。' },
        { type: 'fill', question: 'They decided _____ (sell) their house.', hint: 'decide 後面必須接什麼形式？', answer: 'to sell', explanation: '"decide" 後面必須接不定詞（to + V）。' }
      ],
      summary: ['V-ing：enjoy, finish, avoid, mind, keep, consider, practice', 'to + V：want, need, decide, plan, hope, agree, learn, promise', '兩者皆可同義：like, love, hate, start, begin', '兩者不同義：stop, remember, forget, try', 'stop + V-ing = 停止做 ≠ stop + to V = 停下來去做'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'I need _____ (buy) some groceries.', hint: 'need 後面接什麼形式？', answer: 'to buy', explanation: '"need" 後面接不定詞 "to buy"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'Do you mind _____ (close) the window? I hope _____ (finish) this work soon.', hint: 'mind 後面接什麼？hope 後面接什麼？', answer: 'closing, to finish', explanation: '"mind" 後接 V-ing "closing"。"hope" 後接 to V "to finish"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '選擇正確的意思：A) I remember meeting her. B) I remembered to meet her. — 哪一個是「我記得我有去赴約」？哪一個是「我記得曾經見過她」？', hint: 'remember + V-ing = 記得做過某事。remember + to V = 記得要去做某事。', answer: 'A = 記得曾經見過她, B = 記得要去赴約', explanation: 'A) remember + V-ing = 回憶過去已發生的事（記得見過她）。B) remember + to V = 記住要去執行（記得要去見她）。' }
      ]
    },

    'b1-9': {
      id: 'b1-9',
      level: 'b1',
      unitNumber: 9,
      title: '[B1] 轉述句（間接引語）',
      titleEn: 'Reported Speech — Basic',
      description: '學習如何將直接引語轉換為間接引語（轉述句），掌握時態後退和代名詞轉換的規則。',
      rules: [
        { title: '規則一：轉述句的基本結構', desc: '直接引語 → 間接引語時，使用 said (that) 或 told someone (that)。that 可以省略。', pattern: '直接："I am tired." → 間接：He said (that) he was tired.' },
        { title: '規則二：時態後退（Backshift）', desc: '轉述時，動詞的時態通常要「退後一步」：現在式→過去式，過去式→過去完成式，will→would。', pattern: 'am/is → was ｜ are → were ｜ do/does → did ｜ have → had ｜ will → would ｜ can → could' },
        { title: '規則三：代名詞和時間詞的轉換', desc: '代名詞和時間/地點詞也需根據說話者角度轉換。', pattern: 'I → he/she ｜ my → his/her ｜ today → that day ｜ tomorrow → the next day ｜ here → there' },
        { title: '規則四：轉述疑問句', desc: '轉述 Yes/No 疑問句用 if/whether。轉述 Wh- 疑問句保留疑問詞，但語序改為肯定句語序。', pattern: '"Do you like it?" → He asked if I liked it. ｜ "Where do you live?" → She asked where I lived.' }
      ],
      examples: [
        { en: '"I <b>am</b> happy." → She said she <b>was</b> happy.', zh: '「我很快樂。」→ 她說她很快樂。' },
        { en: '"I <b>will</b> call you." → He said he <b>would</b> call me.', zh: '「我會打給你。」→ 他說他會打給我。' },
        { en: '"I <b>don\'t</b> understand." → She said she <b>didn\'t</b> understand.', zh: '「我不懂。」→ 她說她不懂。' },
        { en: '"<b>Are</b> you coming?" → He asked <b>if</b> I <b>was</b> coming.', zh: '「你要來嗎？」→ 他問我是不是要來。' },
        { en: '"<b>Where</b> do you live?" → She asked <b>where</b> I <b>lived</b>.', zh: '「你住哪裡？」→ 她問我住哪裡。' },
        { en: '"I <b>have finished</b>." → He said he <b>had finished</b>.', zh: '「我完成了。」→ 他說他完成了。' }
      ],
      preClassGuidance: { text: '請比較直接引語和間接引語。注意動詞時態發生了什麼變化？代名詞（I, you）又怎麼改變了？', examples: '"I am happy." → She said she was happy. / "I will call you." → He said he would call me.' },
      exercises: [
        { type: 'fill', question: '"I like pizza." → He said he _____ pizza.', hint: '時態後退：like（現在式）→ ?（過去式）', answer: 'liked', explanation: '時態後退 like → liked。He said he liked pizza.' },
        { type: 'fill', question: '"Where is the station?" → She asked where the station _____.', hint: '時態後退：is → ?', answer: 'was', explanation: '時態後退 is → was。She asked where the station was.' }
      ],
      summary: ['直接引語用引號，間接引語用 said (that)...', '時態後退：現在→過去，過去→過去完成, will→would', '代名詞要根據說話者轉換', 'Yes/No 疑問句用 if/whether 轉述', 'Wh- 疑問句保留疑問詞，語序改為陳述句'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '"I can swim." → She said she _____ swim.', hint: 'can 的時態後退是什麼？', answer: 'could', explanation: '時態後退：can → could。She said she could swim.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '"I have been to Paris." → He told me he _____ _____ to Paris.', hint: 'have been → 時態後退。', answer: 'had been', explanation: '時態後退：have been → had been（過去完成式）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '轉述以下對話："Do you have any pets?" "Yes, I have a cat. I got it last year." → She asked me _____ I _____ any pets. I said that I _____ a cat and that I _____ _____ it the _____ before.', hint: 'Do you...? → if I...。have → had。got → had got。last year → the year before。', answer: 'if, had, had, had got/had gotten, year', explanation: 'if I had any pets → 時態後退。had a cat → 時態後退。had got it → 過去完成式。last year → the year before。' }
      ]
    },

    'b1-10': {
      id: 'b1-10',
      level: 'b1',
      unitNumber: 10,
      title: '[B1] Used to & Would — 過去習慣',
      titleEn: 'Used to & Would — Past Habits',
      description: '學習使用 used to 和 would 來描述過去的習慣或狀態，以及它們與現在的對比。',
      rules: [
        { title: '規則一：used to + 原形動詞', desc: 'used to 表示「過去經常做但現在不做」的習慣或「過去的狀態」。', pattern: 'I used to play soccer. (以前常踢，現在不踢了) / She used to live in Tokyo. (以前住東京，現在不住了)' },
        { title: '規則二：否定和疑問', desc: '否定句用 didn\'t use to；疑問句用 Did + 主詞 + use to。注意：否定和疑問時用 "use to"（沒有 d）。', pattern: "I didn't use to like coffee. / Did you use to play sports?" },
        { title: '規則三：would + 原形動詞（過去的重複動作）', desc: 'would 也可以表示過去的重複習慣性動作，但不能用於過去的「狀態」。', pattern: '✓ When I was young, I would play in the park every day. ｜ ✗ I would live in Tokyo. (live 是狀態，不能用 would)' },
        { title: '規則四：used to vs. would 的差異', desc: 'used to 可以描述過去的習慣和狀態；would 只能描述過去的重複動作（不能是狀態）。used to 更強調「現在不這樣了」的對比。', pattern: '習慣（兩者皆可）：I used to / would walk to school. ｜ 狀態（只能用 used to）：I used to be shy. ✗ I would be shy.' }
      ],
      examples: [
        { en: 'I <b>used to</b> ride my bike to school.', zh: '我以前都騎腳踏車上學。' },
        { en: 'She <b>used to</b> have long hair.', zh: '她以前留長髮。' },
        { en: 'He <b>didn\'t use to</b> like vegetables.', zh: '他以前不喜歡蔬菜。' },
        { en: '<b>Did</b> you <b>use to</b> live in Tainan?', zh: '你以前住在台南嗎？' },
        { en: 'When I was a child, I <b>would</b> spend every summer at my grandparents\' house.', zh: '小時候，我每年夏天都會在祖父母家度過。' },
        { en: 'My grandfather <b>would</b> always tell us stories before bed.', zh: '我的祖父在我們睡前總是會講故事給我們聽。' }
      ],
      preClassGuidance: { text: '想想你小時候經常做但現在不做的事。你能用 "I used to..." 和 "I would..." 來描述嗎？哪些可以用 would，哪些只能用 used to？', examples: 'I used to ride my bike. / She used to have long hair. (狀態→只能用 used to) / I would spend every summer there. (動作→可用 would)' },
      exercises: [
        { type: 'fill', question: 'I _____ (used to / live) in the countryside, but now I live in the city.', hint: '「住在鄉下」是過去的狀態（現在不住了），用什麼？', answer: 'used to live', explanation: '描述過去的狀態用 "used to"。I used to live in the countryside.' },
        { type: 'fill', question: '_____ you _____ (use to / play) any instruments when you were young?', hint: '疑問句用 Did...use to（沒有 d）。', answer: 'Did, use to play', explanation: '疑問句：Did you use to play...?（注意是 "use to" 不是 "used to"）。' }
      ],
      summary: ['used to + V：過去的習慣或狀態（現在不這樣了）', '否定：didn\'t use to ｜ 疑問：Did + 主詞 + use to', 'would + V：過去重複的動作（不能描述狀態）', 'used to 可描述狀態和動作；would 只能描述動作', '兩者都暗示「過去如此，現在不同了」'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'She _____ (used to / be) very shy, but now she is confident.', hint: '害羞是一種狀態，描述過去和現在的對比。', answer: 'used to be', explanation: '過去的狀態用 "used to be"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'When we were children, we _____ (would / play) outside every afternoon. We _____ (used to / have) a big garden.', hint: '第一句是重複的動作（可用 would），第二句是狀態（有花園）。', answer: 'would play, used to have', explanation: '重複動作→ would play。狀態→ used to have（不能用 would have）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '翻譯：我以前不喜歡（use to）吃辣，但現在我很愛。我小時候每天都會（would）喝牛奶，但現在我喝咖啡。', hint: '不喜歡是狀態（only used to）；每天喝是重複動作（can use would）。', answer: "I didn't use to like spicy food, but now I love it. When I was a child, I would drink milk every day, but now I drink coffee.", explanation: "否定狀態用 \"didn't use to like\"。重複動作用 \"would drink\"。" }
      ]
    },

    // =====================
    // B2 UNITS (1-5)
    // =====================
    'b2-1': {
      id: 'b2-1',
      level: 'b2',
      unitNumber: 1,
      title: '[B2] 過去完成式',
      titleEn: 'Past Perfect — Had + Past Participle',
      description: '學習使用過去完成式（had + p.p.）來描述「過去的過去」，即在過去某個事件之前就已經完成的動作。',
      rules: [
        { title: '規則一：過去完成式的結構', desc: '過去完成式 = had + 過去分詞（past participle），所有主詞一律用 had。', pattern: 'I had finished / She had left / They had arrived' },
        { title: '規則二：表示「過去的過去」', desc: '當敘述兩個過去事件時，先發生的用過去完成式，後發生的用過去簡單式。', pattern: 'When I arrived, the train had already left. (火車先走了→我才到)' },
        { title: '規則三：搭配 before, after, by the time', desc: '常與 before, after, by the time, when 等連接詞搭配使用。', pattern: 'She had eaten before I arrived. / After he had finished, he went home. / By the time we got there, the show had started.' },
        { title: '規則四：搭配 never, already, just', desc: '和現在完成式一樣，常搭配 never, already, just 等副詞。', pattern: 'I had never seen snow before that trip. / She had already gone when I called.' }
      ],
      examples: [
        { en: 'When I arrived at the station, the train <b>had already left</b>.', zh: '當我到達車站時，火車已經開走了。' },
        { en: 'She <b>had never traveled</b> abroad before last year.', zh: '去年之前她從未出國旅行過。' },
        { en: 'By the time we got to the cinema, the movie <b>had started</b>.', zh: '等我們到電影院時，電影已經開始了。' },
        { en: 'After he <b>had finished</b> his homework, he went to bed.', zh: '做完功課後，他就去睡了。' },
        { en: 'I <b>had just</b> sat down when the phone rang.', zh: '我才剛坐下，電話就響了。' },
        { en: 'They <b>had lived</b> in Paris for ten years before moving to London.', zh: '搬到倫敦之前，他們在巴黎住了十年。' }
      ],
      preClassGuidance: { text: '請觀察以下句子中有兩個過去事件。哪個先發生？哪個後發生？先發生的用了什麼時態？', examples: 'The train had left when I arrived. / She had never seen snow before that trip.' },
      exercises: [
        { type: 'fill', question: 'By the time she arrived, we _____ already _____ (eat) dinner.', hint: '我們先吃完了，她才到。先發生的動作用什麼時態？', answer: 'had, eaten', explanation: '先發生的動作用過去完成式 "had eaten"。' },
        { type: 'fill', question: 'He realized he _____ (forget) his wallet at home.', hint: '忘記錢包在先，意識到在後。', answer: 'had forgotten', explanation: '"忘記" 在 "意識到" 之前發生，用過去完成式 "had forgotten"。' }
      ],
      summary: ['過去完成式 = had + 過去分詞（p.p.）', '用來描述「過去的過去」（兩個過去事件中先發生的）', '常搭配 before, after, by the time, when', '搭配 already, never, just 等副詞', '後發生的事件用過去簡單式'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'I _____ never _____ (try) sushi before I went to Japan.', hint: '去日本之前從未嚐過壽司，先發生的動作。', answer: 'had, tried', explanation: '「未嚐過」先於「去日本」，用 "had never tried"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'After she _____ (read) the email, she _____ (call) her boss immediately.', hint: '先讀完信（過去完成式），再打電話（過去簡單式）。', answer: 'had read, called', explanation: '先 "had read"（過去完成式），後 "called"（過去簡單式）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'When I _____ (get) to the airport, I realized I _____ (leave) my passport at home. I _____ (pack) it the night before, but I _____ (take) it out of my bag that morning.', hint: '到達機場→發現→護照前晚裝了→早上又拿出來了。注意時間先後順序。', answer: 'got, had left, had packed, had taken', explanation: '"got/realized" 用過去簡單式（故事主線）。其他三個都是在到達機場之前發生的，用過去完成式。' }
      ]
    },

    'b2-2': {
      id: 'b2-2',
      level: 'b2',
      unitNumber: 2,
      title: '[B2] 第三條件句',
      titleEn: 'Third Conditional — If + Past Perfect, Would Have',
      description: '學習用第三條件句表達「過去不可能改變的假設」，即對過去已發生事件的假想和遺憾。',
      rules: [
        { title: '規則一：第三條件句的結構', desc: 'If + 過去完成式 (had + p.p.), 主詞 + would have + 過去分詞。描述「過去沒發生但假設如果發生了」的情境。', pattern: 'If I had studied harder, I would have passed the exam.' },
        { title: '規則二：表達對過去的遺憾', desc: '第三條件句常用來表達「如果當時...就好了」的遺憾或反思。', pattern: 'If I had known, I would have helped you. (當時不知道，所以沒幫忙)' },
        { title: '規則三：否定形式', desc: '兩個子句都可以是否定的。hadn\'t / wouldn\'t have。', pattern: 'If she hadn\'t missed the bus, she wouldn\'t have been late.' },
        { title: '規則四：三種條件句比較', desc: '第一條件句=未來可能；第二條件句=現在假想；第三條件句=過去假想（無法改變）。', pattern: '1st: If I have time, I will help. ｜ 2nd: If I had time, I would help. ｜ 3rd: If I had had time, I would have helped.' }
      ],
      examples: [
        { en: 'If I <b>had studied</b> harder, I <b>would have passed</b>.', zh: '如果我當時更用功，我就會通過考試了。' },
        { en: 'If she <b>hadn\'t missed</b> the train, she <b>would have arrived</b> on time.', zh: '如果她沒有錯過火車，她就會準時到了。' },
        { en: 'I <b>would have called</b> you if I <b>had had</b> your number.', zh: '如果我當時有你的電話號碼，我就會打給你了。' },
        { en: 'If they <b>had left</b> earlier, they <b>wouldn\'t have</b> got stuck in traffic.', zh: '如果他們早點出發，就不會塞在車陣裡了。' },
        { en: 'We <b>would have gone</b> to the beach if it <b>hadn\'t rained</b>.', zh: '如果沒下雨的話，我們就會去海邊了。' }
      ],
      preClassGuidance: { text: '想像一個你過去的遺憾。你能用「If I had...」開頭來假設當時的情況嗎？注意：這些事已經無法改變了。', examples: 'If I had studied harder, I would have passed. / If she hadn\'t missed the train, she would have arrived on time.' },
      exercises: [
        { type: 'fill', question: 'If I _____ (know) about the party, I _____ (come).', hint: '過去不知道（所以沒來），對過去的假設。', answer: 'had known, would have come', explanation: '第三條件句：If + had known（過去完成式），would have come。' },
        { type: 'fill', question: 'She _____ (not / get) the job if she _____ (not / prepare) well.', hint: '她準備充分所以得到了工作。假設如果沒準備...', answer: "wouldn't have got/gotten, hadn't prepared", explanation: '否定的第三條件句。如果沒準備→就不會得到工作。' }
      ],
      summary: ['結構：If + had + p.p., would have + p.p.', '描述過去無法改變的假設', '常用來表達遺憾或反思', '否定：hadn\'t + p.p. / wouldn\'t have + p.p.', '第三（過去假想）vs. 第二（現在假想）vs. 第一（未來可能）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'If I _____ (see) you, I _____ (say) hello.', hint: '過去沒看到你（所以沒打招呼）。', answer: 'had seen, would have said', explanation: '過去的假設：If I had seen you, I would have said hello.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'They _____ (not / cancel) the flight if the weather _____ (be) better.', hint: '天氣不好→所以取消了航班。假設天氣好的話...', answer: "wouldn't have cancelled, had been", explanation: '天氣好（假設）→ 就不會取消。wouldn\'t have cancelled / had been better。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '用三種條件句描述同一情境 — 遲到：1st: If I _____ (be) late, my boss _____ (be) angry. / 2nd: If I _____ (be) late, my boss _____ (be) angry. / 3rd: If I _____ (be) late, my boss _____ (be) angry.', hint: '第一=未來可能遲到；第二=假想現在遲到；第三=過去已經遲到了（但假設沒有）。', answer: 'am, will be, were, would be, had been, would have been', explanation: '1st（可能）: am / will be。2nd（假想）: were / would be。3rd（過去）: had been / would have been。' }
      ]
    },

    'b2-3': {
      id: 'b2-3',
      level: 'b2',
      unitNumber: 3,
      title: '[B2] 混合條件句',
      titleEn: 'Mixed Conditionals',
      description: '學習混合不同時間的條件句，如「過去的原因→現在的結果」或「現在的狀態→過去假設的影響」。',
      rules: [
        { title: '規則一：過去原因 → 現在結果', desc: 'If + 過去完成式, 主詞 + would + 原形動詞。過去的行為影響了現在的狀態。', pattern: 'If I had studied medicine, I would be a doctor now. (過去沒讀醫→現在不是醫生)' },
        { title: '規則二：現在狀態 → 過去假設', desc: 'If + 過去簡單式, 主詞 + would have + p.p.。現在的特質影響了過去可能的行為。', pattern: 'If I were braver, I would have asked her out. (因為我不勇敢→過去沒約她)' },
        { title: '規則三：辨識混合條件句', desc: '關鍵是看兩個子句的「時間」是否不同。如果 if 子句和主要子句指向不同的時間，就是混合條件句。', pattern: 'If + 過去完成式(過去), would + V(現在) ｜ If + 過去式(現在), would have + p.p.(過去)' },
        { title: '規則四：常見的時間提示詞', desc: '主要子句中的 now, today, at the moment 暗示「現在結果」；yesterday, last year 暗示「過去結果」。', pattern: 'If I had saved money, I would be rich NOW. / If she spoke English, she would have got the job LAST YEAR.' }
      ],
      examples: [
        { en: 'If I <b>had accepted</b> that job, I <b>would be</b> living in Tokyo now.', zh: '如果我當時接受了那份工作，我現在就住在東京了。' },
        { en: 'If she <b>weren\'t</b> so shy, she <b>would have spoken</b> up at the meeting.', zh: '如果她不是那麼害羞，她在會議上就會發言了。' },
        { en: 'If he <b>had taken</b> the medicine, he <b>would feel</b> better now.', zh: '如果他吃了藥，現在就會好一些了。' },
        { en: 'If I <b>spoke</b> Japanese, I <b>would have understood</b> the conversation.', zh: '如果我會說日文，我就聽得懂那段對話了。' }
      ],
      preClassGuidance: { text: '比較：「If I had studied, I would have passed.」（過去→過去）vs.「If I had studied, I would be a doctor NOW.」（過去→現在）。第二句是混合條件句——注意兩個子句的時間不同。', examples: 'If I had saved money (過去), I would be rich NOW (現在). / If I were braver (現在), I would have asked (過去).' },
      exercises: [
        { type: 'fill', question: 'If I _____ (not / eat) so much last night, I _____ (not / feel) sick now.', hint: '昨晚吃太多（過去）→現在不舒服（現在）。', answer: "hadn't eaten, wouldn't feel", explanation: '過去原因→現在結果。If + had not eaten（過去完成式），would not feel（現在）。' },
        { type: 'fill', question: 'If she _____ (be) more organized, she _____ (not / lose) her keys yesterday.', hint: '她的個性不夠有條理（現在狀態）→昨天丟了鑰匙（過去結果）。', answer: 'were, wouldn\'t have lost', explanation: '現在狀態→過去結果。If + were（現在假想），wouldn\'t have lost（過去結果）。' }
      ],
      summary: ['混合條件句 = 兩個子句指向不同時間', '類型一：If + 過去完成式, would + V（過去原因→現在結果）', '類型二：If + 過去式, would have + p.p.（現在狀態→過去結果）', '注意時間提示詞（now, today vs. yesterday, last week）', '與純第二/第三條件句的差異在於「時間是否混合」'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'If I _____ (learn) to drive when I was young, I _____ (have) a license now.', hint: '年輕時沒學開車（過去）→現在沒有駕照（現在）。', answer: 'had learned/learnt, would have', explanation: '過去原因→現在結果。had learned / would have。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '判斷是第三條件句還是混合條件句：If he had left on time, he would have caught the bus. / If he had left on time, he would be here now.', hint: '第一句兩個子句都在過去；第二句一個在過去一個在現在。', answer: '第一句是第三條件句（過去→過去），第二句是混合條件句（過去→現在）', explanation: '第三條件句：had left → would have caught（都是過去）。混合條件句：had left（過去）→ would be here now（現在）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'If I _____ (be) better at English, I _____ (apply) for that international job last month. And if I _____ (apply), I _____ (work) at Google right now!', hint: '英文不好（現在）→沒有申請（過去）。沒有申請（過去）→現在沒在Google工作（現在）。', answer: 'were, would have applied, had applied, would be working', explanation: '第一句：現在→過去（were / would have applied）。第二句：過去→現在（had applied / would be working）。' }
      ]
    },

    'b2-4': {
      id: 'b2-4',
      level: 'b2',
      unitNumber: 4,
      title: '[B2] Wish & If Only',
      titleEn: 'Wish & If Only — Expressing Regrets',
      description: '學習使用 wish 和 if only 來表達對現在和過去的遺憾、願望和不滿。',
      rules: [
        { title: '規則一：wish + 過去式（對現在的遺憾）', desc: '用 wish + 過去式表達「希望現在的情況不同」。be 動詞用 were。', pattern: 'I wish I had more time. (我希望我有更多時間→實際上沒有) / I wish I were taller.' },
        { title: '規則二：wish + 過去完成式（對過去的遺憾）', desc: '用 wish + had + p.p. 表達「希望過去做了不同的選擇」。', pattern: 'I wish I had studied harder. (我希望我當時更用功→但實際上沒有)' },
        { title: '規則三：wish + would（對未來的願望/不滿）', desc: '用 wish + would 表達「希望某人/某事改變」，常帶有不滿或埋怨的語氣。', pattern: 'I wish it would stop raining. / I wish you would listen to me.' },
        { title: '規則四：if only = wish 的強調版', desc: 'if only 和 wish 用法相同，但語氣更強烈，表達更深的遺憾或渴望。', pattern: 'If only I had more money! / If only I had listened to you!' }
      ],
      examples: [
        { en: 'I <b>wish</b> I <b>spoke</b> French.', zh: '我希望我會說法文。（但我不會）' },
        { en: 'She <b>wishes</b> she <b>were</b> younger.', zh: '她希望自己更年輕。（但沒辦法）' },
        { en: 'I <b>wish</b> I <b>had bought</b> that house.', zh: '我真希望我當時買了那間房子。' },
        { en: 'I <b>wish</b> you <b>would</b> stop making noise!', zh: '我希望你別再吵了！（不滿）' },
        { en: '<b>If only</b> I <b>had</b> a car!', zh: '要是我有車就好了！' },
        { en: '<b>If only</b> we <b>hadn\'t</b> missed the flight!', zh: '要是我們沒有錯過飛機就好了！' }
      ],
      preClassGuidance: { text: '比較：「I wish I spoke French.」（對現在的遺憾→現在不會說）vs.「I wish I had studied French.」（對過去的遺憾→過去沒有學）。注意 wish 後面的時態。', examples: 'I wish I spoke French. (現在) / I wish I had studied. (過去) / I wish it would stop raining. (未來/不滿)' },
      exercises: [
        { type: 'fill', question: 'I wish I _____ (have) a bigger apartment.', hint: '對現在的遺憾（想要更大的公寓），wish + 什麼時態？', answer: 'had', explanation: '對現在的遺憾用 wish + 過去式。I wish I had a bigger apartment.' },
        { type: 'fill', question: 'She wishes she _____ (not / say) those words yesterday.', hint: '對過去的遺憾（昨天不該說那些話），wish + 什麼時態？', answer: "hadn't said", explanation: '對過去的遺憾用 wish + 過去完成式。She wishes she hadn\'t said those words.' }
      ],
      summary: ['wish + 過去式 = 對現在的遺憾', 'wish + 過去完成式 = 對過去的遺憾', 'wish + would = 對未來的願望/不滿', 'if only = wish 的強調版（語氣更強）', 'wish 後面的 be 動詞傳統上用 were'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'It\'s raining. I wish it _____ (be) sunny.', hint: '希望現在的天氣不同。', answer: 'were', explanation: '對現在的遺憾，wish + 過去式，be 動詞用 "were"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'If only I _____ (listen) to my parents\' advice when I was young! I wish I _____ (be) wiser now.', hint: '第一句對過去的遺憾，第二句對現在的遺憾。', answer: 'had listened, were', explanation: '過去遺憾：had listened。現在遺憾：were wiser。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '三種 wish 的用法：我希望我「現在」更高 → I wish I _____ taller. 我希望我「昨天」沒遲到 → I wish I _____ late yesterday. 我希望「天氣能」放晴 → I wish it _____ stop raining.', hint: '現在→過去式；過去→過去完成式；未來/不滿→would。', answer: "were, hadn't been, would", explanation: '現在遺憾 "were"；過去遺憾 "hadn\'t been"；對未來的希望 "would"。' }
      ]
    },

    'b2-5': {
      id: 'b2-5',
      level: 'b2',
      unitNumber: 5,
      title: '[B2] 未來完成式與未來進行式',
      titleEn: 'Future Perfect & Future Continuous',
      description: '學習使用未來完成式（will have + p.p.）和未來進行式（will be + V-ing）來描述未來某個時間點之前的完成動作和進行中的動作。',
      rules: [
        { title: '規則一：未來完成式的結構', desc: 'will have + 過去分詞，表示在未來某個時間點「之前」就會完成的動作。', pattern: 'By next year, I will have graduated. / By 6 p.m., she will have finished work.' },
        { title: '規則二：未來完成式搭配 by', desc: '常搭配 by + 未來時間，表示「到...的時候就已經完成了」。', pattern: 'by tomorrow / by next month / by the time you arrive / by 2030' },
        { title: '規則三：未來進行式的結構', desc: 'will be + V-ing，表示在未來某個時間點「正在進行」的動作。', pattern: 'At this time tomorrow, I will be flying to Paris.' },
        { title: '規則四：未來進行式表示理所當然', desc: '未來進行式也可以表示未來自然會發生的事（不是計畫或意願），語氣比 will 更中性。', pattern: 'I\'ll be seeing Tom later. (只是陳述會見到他) vs. I\'ll see Tom later. (帶有意願)' }
      ],
      examples: [
        { en: '<b>By</b> next month, I <b>will have finished</b> this course.', zh: '到下個月，我就會完成這門課了。' },
        { en: '<b>By the time</b> you arrive, we <b>will have eaten</b> dinner.', zh: '等你到的時候，我們就已經吃完晚餐了。' },
        { en: 'This time tomorrow, I <b>will be sitting</b> on a beach.', zh: '明天這個時候，我會正坐在海灘上。' },
        { en: 'Don\'t call at 3 — I <b>will be having</b> a meeting.', zh: '三點不要打來——我會正在開會。' },
        { en: '<b>By</b> 2030, scientists <b>will have developed</b> new treatments.', zh: '到 2030 年，科學家將會開發出新的治療方法。' }
      ],
      preClassGuidance: { text: '比較三種未來表達：「I will finish.」（我會完成）vs.「I will have finished by 6.」（六點前就完成了）vs.「I will be finishing at 6.」（六點時正在完成）。', examples: 'By next year, I will have graduated. / At this time tomorrow, I will be flying. / By 2030...' },
      exercises: [
        { type: 'fill', question: 'By the end of this year, she _____ (work) here for 20 years.', hint: '到今年底就滿 20 年了（完成），用什麼時態？', answer: 'will have worked', explanation: '到未來某點之前就完成用 "will have worked"（未來完成式）。' },
        { type: 'fill', question: 'Don\'t call me at 8 p.m. I _____ (have) dinner.', hint: '八點時正在吃晚餐（進行中），用什麼時態？', answer: 'will be having', explanation: '未來某時正在進行用 "will be having"（未來進行式）。' }
      ],
      summary: ['未來完成式：will have + p.p.（未來某點之前完成）', '常搭配 by + 時間（by tomorrow, by next year）', '未來進行式：will be + V-ing（未來某時正在做）', '未來進行式也表示自然會發生的事', 'By the time... 搭配未來完成式'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'This time next week, I _____ (lie) on a beach in Hawaii.', hint: '下週這個時候正在做的事。', answer: 'will be lying', explanation: '未來某時正在進行用 "will be lying"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'By the time the guests arrive, we _____ (prepare) everything. At 7 p.m., we _____ (welcome) them at the door.', hint: '客人到之前全部準備好（完成）。晚上七點正在迎接他們（進行）。', answer: 'will have prepared, will be welcoming', explanation: '完成→ will have prepared。進行→ will be welcoming。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: 'My daughter is 3 now. By the time she is 18, she _____ (spend) about 15,000 hours in school. When she turns 18, she _____ (study) at university.', hint: '到 18 歲時就已經累積了的時間（完成）。18 歲時正在做的事（進行）。', answer: 'will have spent, will be studying', explanation: '累積的時數→ will have spent。那時正在做→ will be studying。' }
      ]
    },

    // B2 UNITS (6-10)
    'b2-6': {
      id: 'b2-6',
      level: 'b2',
      unitNumber: 6,
      title: '[B2] 進階被動語態',
      titleEn: 'Advanced Passive Voice — Modals, Perfect & Continuous',
      description: '學習被動語態在情態動詞、完成式和進行式中的進階應用。',
      rules: [
        { title: '規則一：情態動詞 + 被動', desc: '情態動詞 + be + p.p.（can be done, must be finished, should be reported）。', pattern: 'This can be fixed. / The report must be submitted by Friday.' },
        { title: '規則二：現在完成式被動', desc: 'have/has + been + p.p.，表示「已經被做了」。', pattern: 'The email has been sent. / Three people have been arrested.' },
        { title: '規則三：現在進行式被動', desc: 'am/is/are + being + p.p.，表示「正在被做」。', pattern: 'The road is being repaired. / New houses are being built.' },
        { title: '規則四：It is said that... / He is said to...', desc: '用被動語態來轉述傳聞或看法，用法正式。常見動詞：say, believe, think, report, know。', pattern: 'It is said that he is very rich. = He is said to be very rich.' }
      ],
      examples: [
        { en: 'The problem <b>can be solved</b> easily.', zh: '這個問題可以輕易被解決。' },
        { en: 'The homework <b>must be submitted</b> by Friday.', zh: '作業必須在星期五前繳交。' },
        { en: 'The bridge <b>has been damaged</b> by the flood.', zh: '橋被洪水損壞了。' },
        { en: 'A new hospital <b>is being built</b> in our city.', zh: '我們城市正在建造一座新醫院。' },
        { en: '<b>It is believed that</b> exercise improves mental health.', zh: '據信運動能改善心理健康。' },
        { en: 'She <b>is known to be</b> an excellent violinist.', zh: '她被公認為出色的小提琴家。' }
      ],
      preClassGuidance: { text: '回顧被動語態的基本結構（be + p.p.），現在想想：如果要把這個結構和 can, must, have been, is being 結合，會變成什麼？', examples: 'can be done / has been sent / is being built / It is said that...' },
      exercises: [
        { type: 'fill', question: 'The documents _____ already _____ (send) to the client.', hint: '已經被寄出了（現在完成式被動）。', answer: 'have, been sent', explanation: '現在完成式被動：have been sent。' },
        { type: 'fill', question: 'A new road _____ (build) near our house right now.', hint: '現在正在被建造（現在進行式被動）。', answer: 'is being built', explanation: '進行式被動：is being built。' }
      ],
      summary: ['情態+被動：can/must/should + be + p.p.', '完成式被動：have/has + been + p.p.', '進行式被動：am/is/are + being + p.p.', 'It is said/believed/known that... 轉述傳聞', 'He is said to be... 人作主詞的轉述'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'This letter _____ (should / deliver) today.', hint: '信件「應該被寄出」。', answer: 'should be delivered', explanation: '情態動詞+被動：should be delivered。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'The suspect _____ (have / interview) by the police for three hours. He _____ still _____ (question) now.', hint: '已經被訊問了三小時（完成式被動）。現在仍在被訊問（進行式被動）。', answer: 'has been interviewed, is, being questioned', explanation: '完成被動 "has been interviewed"；進行被動 "is being questioned"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '改寫：People say that this restaurant serves the best pasta in town. → It _____ _____ that this restaurant _____ the best pasta. → This restaurant _____ _____ _____ _____ the best pasta.', hint: '兩種轉述被動結構：It is said that... 和 主詞 is said to...', answer: 'is said, serves, is said to serve', explanation: 'It is said that... serves（that 子句時態不變）。This restaurant is said to serve...（用不定詞）。' }
      ]
    },

    'b2-7': {
      id: 'b2-7',
      level: 'b2',
      unitNumber: 7,
      title: '[B2] 非限定關係子句',
      titleEn: 'Non-defining Relative Clauses',
      description: '學習使用逗號搭配的非限定關係子句來為句子添加額外資訊，並區分限定與非限定用法。',
      rules: [
        { title: '規則一：非限定關係子句的特徵', desc: '用逗號隔開，提供「額外補充資訊」（移除後句子仍完整）。不能用 that。', pattern: 'My sister, who lives in London, is a doctor.' },
        { title: '規則二：vs. 限定關係子句', desc: '限定子句：提供必要的辨識資訊（沒有逗號）。非限定子句：提供額外補充（有逗號）。', pattern: '限定：The man who called is my boss. (哪個男人？) ｜ 非限定：My boss, who called yesterday, wants to see you. (只是補充)' },
        { title: '規則三：which 指代整個句子', desc: '非限定子句中的 which 可以指代前面整個句子的內容。', pattern: 'He passed the exam, which surprised everyone. (通過考試這件事讓大家驚訝)' },
        { title: '規則四：whose 表示所有關係', desc: 'whose 可以在兩種關係子句中使用，表示「某人的」。', pattern: 'The woman whose car was stolen called the police.' }
      ],
      examples: [
        { en: 'Paris, <b>which</b> is the capital of France, is famous for the Eiffel Tower.', zh: '巴黎，法國的首都，以艾菲爾鐵塔聞名。' },
        { en: 'My mother, <b>who</b> is 65, still works full-time.', zh: '我的母親今年 65 歲，仍然全職工作。' },
        { en: 'He won the lottery, <b>which</b> changed his life completely.', zh: '他中了樂透，這件事徹底改變了他的人生。' },
        { en: 'The professor, <b>whose</b> lectures are always interesting, retired last month.', zh: '那位教授，他的課總是很有趣，上個月退休了。' },
        { en: 'Tokyo, <b>where</b> I lived for three years, is an amazing city.', zh: '東京，我住了三年的地方，是一座令人驚嘆的城市。' }
      ],
      preClassGuidance: { text: '比較：「The book that I bought is good.」（哪本書？必要資訊）vs.「Harry Potter, which I bought last week, is good.」（額外補充，因為已經知道哪本書）。', examples: '限定：The man who called... / 非限定：My boss, who called, ... / which 指整句：He passed, which surprised everyone.' },
      exercises: [
        { type: 'fill', question: 'Albert Einstein, _____ developed the theory of relativity, was born in Germany.', hint: '補充愛因斯坦的額外資訊（人），用什麼關係代名詞？', answer: 'who', explanation: '非限定子句修飾人用 "who"（不能用 that）。' },
        { type: 'fill', question: 'She got promoted, _____ made her very happy.', hint: '升職這件「事」讓她開心，which 指代什麼？', answer: 'which', explanation: '"which" 指代前面整個句子的內容（升職這件事）。' }
      ],
      summary: ['非限定子句用逗號隔開，不能用 that', '提供額外補充資訊（移除後句意仍完整）', 'which 可指代前面整個句子', 'whose 表示所有關係（某人的）', '限定 = 必要辨識 ≠ 非限定 = 額外補充'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'The Mona Lisa, _____ was painted by Leonardo da Vinci, is in the Louvre.', hint: '補充蒙娜麗莎的額外資訊（事物）。', answer: 'which', explanation: '非限定子句修飾事物用 "which"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'My neighbor, _____ dog always barks at night, finally moved away.', hint: '「他的狗」，表示所有關係的關係代名詞。', answer: 'whose', explanation: '"whose dog" = 他的狗，表示所有關係。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '判斷需不需要逗號：(A) The student _____ won the prize is my cousin. (B) Tom _____ won the prize _____ is my cousin.', hint: '(A) 需要辨識是哪個學生（限定）。(B) Tom 已經是特定的人了（非限定）。', answer: '(A) who/that (no commas) — The student who won the prize is my cousin. (B) , who , (commas needed) — Tom, who won the prize, is my cousin.', explanation: '(A) 限定子句（辨識哪個學生）→ 不加逗號。(B) 非限定子句（Tom 已經夠具體了）→ 加逗號。' }
      ]
    },

    'b2-8': {
      id: 'b2-8',
      level: 'b2',
      unitNumber: 8,
      title: '[B2] 使役結構',
      titleEn: 'Causative — Have / Get Something Done',
      description: '學習使用「have/get + 受詞 + 過去分詞」來表達請別人做某事，以及 make, let, help 等使役動詞的用法。',
      rules: [
        { title: '規則一：have something done', desc: '表示「請/安排別人幫你做某事」，不是自己做的。重點在事情被完成。', pattern: 'I had my car repaired. (我請人修了我的車→不是自己修的)' },
        { title: '規則二：get something done', desc: '和 have something done 意思相近，語氣較口語。也暗示需要一些努力才完成。', pattern: 'I got my hair cut. / I need to get my phone fixed.' },
        { title: '規則三：make / let / help + 原形動詞', desc: 'make（使/迫使）、let（讓/允許）後面接「原形動詞」（不加 to）。help 後面接原形或 to + V 皆可。', pattern: 'She made me laugh. / Let me help you. / He helped me (to) carry the bags.' },
        { title: '規則四：have/get + 不愉快的經歷', desc: 'have/get something done 也可以表示「遭遇不幸」（事情發生在你身上，非自願）。', pattern: 'I had my wallet stolen. (我的錢包被偷了) / She got her car broken into. (她的車被闖入了)' }
      ],
      examples: [
        { en: 'I need to <b>have my eyes checked</b>.', zh: '我需要去檢查眼睛。（請醫生檢查）' },
        { en: 'She <b>had her dress made</b> by a designer.', zh: '她的洋裝是請設計師做的。' },
        { en: 'Where did you <b>get your hair done</b>?', zh: '你在哪裡做的頭髮？' },
        { en: 'The teacher <b>made</b> us <b>write</b> an essay.', zh: '老師讓我們寫一篇作文。' },
        { en: 'My parents <b>let</b> me <b>stay</b> up late on weekends.', zh: '我父母讓我週末晚睡。' },
        { en: 'I <b>had my phone stolen</b> on the train.', zh: '我在火車上手機被偷了。（不幸經歷）' }
      ],
      preClassGuidance: { text: '比較：「I repaired my car.」（自己修的）vs.「I had my car repaired.」（請別人修的）。Have something done 不是自己做，是別人幫你做的。', examples: 'I had my car repaired. / I got my hair cut. / She made me laugh. / Let me help.' },
      exercises: [
        { type: 'fill', question: 'I need to _____ my jacket _____ (clean).', hint: '要請乾洗店清洗夾克（不是自己洗），用 have/get ... done 結構。', answer: 'have/get, cleaned', explanation: 'have/get + 受詞 + p.p.。I need to have/get my jacket cleaned.' },
        { type: 'fill', question: 'The boss _____ (make) everyone _____ (work) overtime.', hint: 'make 後面接什麼形式的動詞？', answer: 'made, work', explanation: '"make" 後面接原形動詞（不加 to）。The boss made everyone work overtime.' }
      ],
      summary: ['have/get + 受詞 + p.p. = 請別人做', 'get 比 have 更口語', 'make + 人 + 原形動詞 = 使/迫使', 'let + 人 + 原形動詞 = 允許/讓', 'have/get something done 也可表示不幸經歷'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'I _____ my teeth _____ (check) every six months.', hint: '每半年請牙醫檢查牙齒。', answer: 'have/get, checked', explanation: 'have/get + 受詞 + p.p.→ have my teeth checked。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'She didn\'t want to go, but her friends _____ (make) her _____ (go). They wouldn\'t _____ (let) her _____ (stay) home.', hint: 'make 和 let 後面都是接什麼形式？', answer: 'made, go, let, stay', explanation: 'make/let + 人 + 原形動詞。made her go / let her stay。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '區分兩種意思：(A) She had her photo taken at the studio. (B) She had her bag snatched on the street. — 哪個是「請人做」？哪個是「不幸遭遇」？', hint: '(A) 在攝影棚拍照是主動安排的。(B) 包被搶是非自願的。', answer: '(A) 請人做（主動安排去拍照），(B) 不幸遭遇（包被搶了）', explanation: '相同結構但語境決定意思。(A) 是安排別人做→拍照。(B) 是不幸事件→被搶。' }
      ]
    },

    'b2-9': {
      id: 'b2-9',
      level: 'b2',
      unitNumber: 9,
      title: '[B2] 片語動詞',
      titleEn: 'Phrasal Verbs — Common Patterns',
      description: '學習常見的片語動詞（動詞 + 介副詞），理解它們的特殊意義，以及可分離與不可分離的差異。',
      rules: [
        { title: '規則一：什麼是片語動詞', desc: '片語動詞 = 動詞 + 介副詞（up, down, on, off, out, in, away 等），組合後產生新的意思。', pattern: 'look up (查詢) ≠ look (看) + up (往上) ｜ give up (放棄) ≠ give (給) + up (往上)' },
        { title: '規則二：可分離的片語動詞', desc: '可分離的片語動詞：受詞可以放在中間或後面。但代名詞（it, them）必須放在中間。', pattern: '✓ Turn off the light. ✓ Turn the light off. ✓ Turn it off. ✗ Turn off it.' },
        { title: '規則三：不可分離的片語動詞', desc: '有些片語動詞的受詞只能放在後面，不能分開。', pattern: '✓ I ran into an old friend. ✗ I ran an old friend into.' },
        { title: '規則四：常見片語動詞分類', desc: '依主題分類學習更有效率。', pattern: '結束：give up, turn off, put out ｜ 開始：set up, take up ｜ 繼續：carry on, keep on ｜ 發現：find out, work out ｜ 人際：get along, break up' }
      ],
      examples: [
        { en: 'Can you <b>turn down</b> the music? It\'s too loud.', zh: '你可以把音樂轉小聲嗎？太大聲了。' },
        { en: 'I need to <b>look up</b> this word in the dictionary.', zh: '我需要在字典裡查這個字。' },
        { en: 'She <b>grew up</b> in a small town.', zh: '她在一個小鎮長大。' },
        { en: 'Don\'t <b>give up</b>! Keep trying!', zh: '不要放棄！繼續努力！' },
        { en: 'I <b>ran into</b> my old teacher at the supermarket.', zh: '我在超市巧遇我的舊老師。' },
        { en: 'We need to <b>figure out</b> a solution.', zh: '我們需要想出一個解決辦法。' }
      ],
      preClassGuidance: { text: '你知道 "look up" 除了「往上看」還可以是什麼意思嗎？片語動詞的意思往往和原本的動詞完全不同。觀察以下例子。', examples: 'turn down (拒絕/轉小聲) / look up (查詢) / give up (放棄) / run into (巧遇) / figure out (想出)' },
      exercises: [
        { type: 'fill', question: 'I didn\'t know the answer, so I _____ it _____ online.', hint: '在網上「查詢」答案，用 look up。注意代名詞 it 的位置。', answer: 'looked, up', explanation: '代名詞必須放在片語動詞中間：looked it up（不是 looked up it）。' },
        { type: 'fill', question: 'She wants to _____ _____ (放棄) smoking.', hint: '「放棄」的片語動詞是？', answer: 'give up', explanation: '"give up" = 放棄。She wants to give up smoking.' }
      ],
      summary: ['片語動詞 = 動詞 + 介副詞，產生新意思', '可分離：受詞可在中間或後面，但代名詞必須在中間', '不可分離：受詞只能在後面', '片語動詞的意思常需個別記憶', '分主題學習更有效率'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Please _____ _____ (穿上) your coat. It\'s cold outside.', hint: '穿上衣服的片語動詞。', answer: 'put on', explanation: '"put on" = 穿上。Please put on your coat.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'The meeting has been _____ _____ (延期) until next week. We need to _____ _____ (想出) a new plan by then.', hint: '延期 = put off；想出 = come up with / figure out。', answer: 'put off, come up with', explanation: '"put off" = 延期。"come up with" = 想出。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '代名詞位置測試。改正錯誤：(A) I\'ll pick up her at 8. (B) She turned off it. (C) I ran into her yesterday.', hint: '代名詞在可分離片語動詞中必須放中間（A, B）。不可分離的不能分開（C）。', answer: '(A) I\'ll pick her up at 8. (B) She turned it off. (C) 正確不用改。', explanation: '(A) pick up 可分離→ pick her up。(B) turn off 可分離→ turned it off。(C) run into 不可分離→ ran into her（正確）。' }
      ]
    },

    'b2-10': {
      id: 'b2-10',
      level: 'b2',
      unitNumber: 10,
      title: '[B2] 語篇連接詞',
      titleEn: 'Discourse Markers & Linking Words',
      description: '學習使用進階連接詞和語篇標記來組織段落、表達對比、因果、讓步等複雜邏輯關係。',
      rules: [
        { title: '規則一：對比與讓步', desc: 'however / nevertheless / although / despite / in spite of 用來表達「雖然...但是...」的讓步關係。', pattern: 'However, ... (然而) / Although + 子句, ... (雖然) / Despite + 名詞/V-ing, ... (儘管)' },
        { title: '規則二：因果與結果', desc: 'therefore / as a result / consequently / due to 用來表達原因和結果。', pattern: 'Therefore, ... (因此) / As a result, ... (結果) / Due to + 名詞, ... (由於)' },
        { title: '規則三：補充與列舉', desc: 'furthermore / moreover / in addition / besides 用來添加額外資訊。', pattern: 'Furthermore, ... (此外) / In addition to + 名詞, ... (除了...之外)' },
        { title: '規則四：although vs. despite 的結構差異', desc: 'although / even though 後面接「完整子句」。despite / in spite of 後面接「名詞」或「V-ing」。', pattern: 'Although it rained, we went out. = Despite the rain, we went out. = Despite raining, we went out.' }
      ],
      examples: [
        { en: 'She studied hard. <b>However</b>, she didn\'t pass the exam.', zh: '她用功讀書了。然而，她沒有通過考試。' },
        { en: '<b>Although</b> he was tired, he continued working.', zh: '雖然他很累，他繼續工作。' },
        { en: '<b>Despite</b> the heavy rain, the match went ahead.', zh: '儘管下大雨，比賽仍然進行了。' },
        { en: 'He was late. <b>Therefore</b>, he missed the first session.', zh: '他遲到了。因此，他錯過了第一場。' },
        { en: 'The food is excellent. <b>Moreover</b>, the prices are very reasonable.', zh: '食物很棒。而且，價格非常合理。' },
        { en: '<b>Due to</b> bad weather, the flight was cancelled.', zh: '由於天氣不好，航班被取消了。' }
      ],
      preClassGuidance: { text: '你已經學過 but, because, so 這些基本連接詞。現在觀察以下進階版：however, although, despite, therefore, moreover。它們的語氣更正式，用法有什麼不同？', examples: 'but → however / because → due to / and also → furthermore / although vs. despite' },
      exercises: [
        { type: 'fill', question: '_____ (Although / Despite) the delay, we arrived on time.', hint: '後面接名詞 "the delay"，用 although 還是 despite？', answer: 'Despite', explanation: '"despite" 後面接名詞。"although" 後面接子句。' },
        { type: 'fill', question: 'The project was successful. _____, there are some areas for improvement.', hint: '前面說成功，後面轉折說有改進空間。', answer: 'However', explanation: '"However" 用來表示轉折，相當於正式版的 "but"。' }
      ],
      summary: ['對比/讓步：however, although, despite, in spite of', '因果：therefore, as a result, due to, consequently', '補充：furthermore, moreover, in addition', 'although + 子句 vs. despite + 名詞/V-ing', '這些連接詞使語言更正式、更有邏輯性'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '_____ it was expensive, she bought it anyway.', hint: '「雖然」很貴，後面接子句。', answer: 'Although', explanation: '"Although" 後面接子句。Although it was expensive, she bought it.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '用兩種方式表達同一個意思：「雖然他缺乏經驗，他得到了那份工作。」A) _____ his lack of experience, he got the job. B) _____ he lacked experience, he got the job.', hint: '(A) 後面接名詞→despite。(B) 後面接子句→although。', answer: 'Despite, Although', explanation: 'Despite + 名詞 (his lack of experience)。Although + 子句 (he lacked experience)。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '填入適當的語篇連接詞：The experiment failed several times. _____, the team didn\'t give up. They modified their approach. _____, they decided to increase the sample size. _____ _____ their persistence, they finally achieved a breakthrough.', hint: '失敗→但沒放棄（讓步）。修改方法→另外...（補充）。因為堅持→最終突破（因果）。', answer: 'However, Furthermore/Moreover, Due to', explanation: 'However（讓步/轉折）。Furthermore（補充）。Due to（原因）。' }
      ]
    },

    // =====================
    // C1 UNITS (1-5)
    // =====================
    'c1-1': {
      id: 'c1-1',
      level: 'c1',
      unitNumber: 1,
      title: '[C1] 倒裝句',
      titleEn: 'Inversion — Formal & Emphatic Word Order',
      description: '學習在否定副詞、only 結構和條件句中使用倒裝語序，提升語言的正式感與強調效果。',
      rules: [
        { title: '規則一：否定副詞開頭的倒裝', desc: '當 never, rarely, seldom, hardly, barely, not only, no sooner 等否定副詞放在句首時，主詞和助動詞要倒裝。', pattern: 'Never have I seen such beauty. / Rarely does he complain.' },
        { title: '規則二：Only + 時間/地點/條件開頭', desc: '當 only + 介系詞片語放在句首時，主要子句需要倒裝。', pattern: 'Only after the exam did I realize my mistake. / Only in Japan can you find this.' },
        { title: '規則三：Not only... but also 倒裝', desc: 'Not only 放句首時，第一個子句倒裝，but also 後面正常語序。', pattern: 'Not only did she win, but she also broke the record.' },
        { title: '規則四：條件句省略 if 的倒裝', desc: '正式文體中可省略 if，用倒裝取代。Had = If...had, Were = If...were, Should = If...should。', pattern: 'Had I known, I would have helped. = If I had known... / Were I rich, I would travel. = If I were rich...' }
      ],
      examples: [
        { en: '<b>Never</b> <b>have</b> I <b>seen</b> such a beautiful sunset.', zh: '我從未見過如此美麗的日落。' },
        { en: '<b>Rarely does</b> she make mistakes.', zh: '她很少犯錯。' },
        { en: '<b>Not only did</b> he apologize, <b>but</b> he <b>also</b> sent flowers.', zh: '他不僅道歉了，而且還送了花。' },
        { en: '<b>Only after</b> reading the book <b>did</b> I understand the movie.', zh: '只有讀了書之後，我才看懂了電影。' },
        { en: '<b>Had</b> I <b>known</b> about the sale, I would have gone.', zh: '如果我知道有打折，我就會去了。' },
        { en: '<b>Seldom</b> <b>do</b> we get the chance to travel abroad.', zh: '我們很少有出國旅行的機會。' }
      ],
      preClassGuidance: { text: '觀察正常語序和倒裝語序的差別：「I have never seen...」→「Never have I seen...」。把否定副詞移到句首後，主詞和助動詞的位置發生了什麼變化？', examples: 'Never have I seen... / Rarely does she... / Had I known... / Only then did I realize...' },
      exercises: [
        { type: 'fill', question: 'Never _____ I _____ (taste) such delicious food.', hint: '否定副詞 never 放句首，助動詞和主詞要倒裝。', answer: 'have, tasted', explanation: '倒裝：Never have I tasted...（助動詞 have 移到主詞前）。' },
        { type: 'fill', question: 'Not only _____ he _____ (speak) French, but he also speaks German.', hint: 'Not only 開頭要倒裝。他「會說」法文。', answer: 'does, speak', explanation: '倒裝：Not only does he speak...（助動詞 does 移到主詞前）。' }
      ],
      summary: ['否定副詞句首（never, rarely, seldom...）→ 助動詞 + 主詞倒裝', 'Only + 介系詞片語句首 → 主要子句倒裝', 'Not only... but also → 第一子句倒裝', '條件句省略 if → Had/Were/Should + 主詞', '倒裝句常見於正式文體和強調語境'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Seldom _____ we _____ (eat) out during the week.', hint: '否定副詞 seldom 開頭，倒裝。', answer: 'do, eat', explanation: '倒裝：Seldom do we eat out...。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '改寫為倒裝句：If I had studied harder, I would have passed. → _____ I _____ harder, I would have passed.', hint: '省略 if 的條件句倒裝：If I had → Had I。', answer: 'Had, studied', explanation: '省略 if，將 had 移到句首。Had I studied harder...' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '改寫為倒裝句：She not only sings well, but she also plays the piano beautifully. → Not only _____ she _____ well, but she also _____ the piano beautifully.', hint: 'Not only 放句首，第一子句倒裝。第二子句正常。', answer: 'does, sing, plays', explanation: 'Not only does she sing well（倒裝），but she also plays the piano beautifully（正常語序）。' }
      ]
    },

    'c1-2': {
      id: 'c1-2',
      level: 'c1',
      unitNumber: 2,
      title: '[C1] 分裂句',
      titleEn: 'Cleft Sentences — It is... that / What... is',
      description: '學習使用 It is/was... that 和 What... is/was 兩種分裂句型來強調句子中的特定資訊。',
      rules: [
        { title: '規則一：It is/was... that 強調句', desc: '把想強調的部分放在 It is/was 和 that 之間。可以強調人、事物、時間、地點等。', pattern: 'I met Tom at the party. → It was Tom that I met. / It was at the party that I met Tom.' },
        { title: '規則二：What... is/was 強調句', desc: 'What + 主詞 + 動詞 + is/was + 被強調部分。常用來強調動作或事物。', pattern: 'I need a vacation. → What I need is a vacation.' },
        { title: '規則三：The thing/reason/place... is', desc: '可用 The thing/reason/place/person + that + 子句 + is/was 來強調。', pattern: 'The reason I\'m late is that the train was delayed. / The thing that annoys me is his attitude.' },
        { title: '規則四：All... is / The only thing... is', desc: '用 All + 主詞 + 動詞 + is 來表達「唯一需要的就是...」，具有強調和限縮效果。', pattern: 'All I want is a cup of coffee. / The only thing we need is more time.' }
      ],
      examples: [
        { en: '<b>It was</b> John <b>that</b> broke the window, not Tom.', zh: '打破窗戶的是 John，不是 Tom。（強調人）' },
        { en: '<b>It was</b> in 2020 <b>that</b> she graduated.', zh: '她是在 2020 年畢業的。（強調時間）' },
        { en: '<b>What</b> I love about Taipei <b>is</b> the food.', zh: '我喜歡台北的是美食。（強調事物）' },
        { en: '<b>What</b> she did <b>was</b> quit her job and start a business.', zh: '她做的事是辭職然後創業。（強調動作）' },
        { en: '<b>All</b> I want <b>is</b> some peace and quiet.', zh: '我想要的只是一些平靜。' },
        { en: '<b>The reason</b> I called <b>is that</b> I have good news.', zh: '我打電話的原因是我有好消息。' }
      ],
      preClassGuidance: { text: '比較：「I need help.」vs.「What I need is help.」vs.「It is help that I need.」三句意思相同，但後兩句更強調了「help」。這就是分裂句的效果。', examples: 'It was Tom that... / What I need is... / All I want is... / The reason I called is that...' },
      exercises: [
        { type: 'fill', question: 'It _____ my mother _____ taught me to cook, not my father.', hint: '強調是「媽媽」教我做菜。It is/was... that 結構。', answer: 'was, that', explanation: 'It was my mother that taught me to cook.（強調 my mother）' },
        { type: 'fill', question: '_____ I really need _____ a good night\'s sleep.', hint: '我真正需要的是好好睡一覺。What... is 結構。', answer: 'What, is', explanation: 'What I really need is a good night\'s sleep.（What 強調 need 的對象）' }
      ],
      summary: ['It is/was + 被強調部分 + that + 其餘 → 強調特定元素', 'What + S + V + is/was + 強調部分 → 強調事物或動作', 'The reason/thing/place... is that → 強調原因/事物/地點', 'All + S + V + is → 「唯一就是...」的限縮強調', '分裂句用來突出重要資訊，常在對比或澄清時使用'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '_____ she said _____ that she was sorry.', hint: '她說的是她很抱歉。What... was 結構。', answer: 'What, was', explanation: 'What she said was that she was sorry.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '改寫為分裂句強調時間：I met her in Paris in 2019. → It _____ in 2019 _____ I met her in Paris.', hint: '強調時間「2019」。', answer: 'was, that', explanation: 'It was in 2019 that I met her in Paris.（強調時間）' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '用三種方式強調同一句：「I love the weather in Taiwan.」→ A) It is _____ _____ I love about Taiwan. B) _____ I love about Taiwan _____ the weather. C) The _____ _____ I love about Taiwan is the weather.', hint: '(A) It is... that (B) What... is (C) The thing that...is', answer: 'the weather that, What, is, thing that', explanation: '(A) It is the weather that I love. (B) What I love about Taiwan is the weather. (C) The thing that I love about Taiwan is the weather.' }
      ]
    },

    'c1-3': {
      id: 'c1-3',
      level: 'c1',
      unitNumber: 3,
      title: '[C1] 虛擬語氣',
      titleEn: 'Subjunctive Mood — Formal Suggestions & Demands',
      description: '學習在正式的建議、要求和必要性表達中使用虛擬語氣（動詞原形），以及 It is important that... 的用法。',
      rules: [
        { title: '規則一：suggest/recommend/insist/demand + that + 原形動詞', desc: '在這些動詞後面的 that 子句中，不論主詞為何，動詞一律用「原形」（不加 s，不改時態）。', pattern: 'I suggest that he go. (不是 goes) / She insisted that he be on time. (不是 was)' },
        { title: '規則二：It is important/essential/vital that + 原形動詞', desc: '在 It is + 重要性形容詞 + that 子句中，動詞用原形。', pattern: 'It is essential that everyone be present. / It is important that she arrive on time.' },
        { title: '規則三：否定形式', desc: '虛擬語氣的否定用 not + 原形動詞（不用 doesn\'t 或 don\'t）。', pattern: 'I suggest that he not go alone. (不是 doesn\'t go) / It is vital that this information not be shared.' },
        { title: '規則四：虛擬語氣 vs. should + V', desc: '在英式英語中，常用 should + 原形動詞代替虛擬語氣。美式英語偏好直接用原形。', pattern: '美式：I suggest that he go. ｜ 英式：I suggest that he should go.' }
      ],
      examples: [
        { en: 'The doctor <b>recommended</b> that she <b>take</b> more rest.', zh: '醫生建議她多休息。（take 不是 takes）' },
        { en: 'I <b>insist</b> that he <b>be</b> present at the meeting.', zh: '我堅持他必須出席會議。（be 不是 is）' },
        { en: '<b>It is essential</b> that every student <b>submit</b> the report on time.', zh: '每個學生準時繳交報告是至關重要的。（submit 不是 submits）' },
        { en: 'The manager <b>demanded</b> that the error <b>be corrected</b> immediately.', zh: '經理要求立刻更正錯誤。' },
        { en: 'She <b>suggested</b> that he <b>not drive</b> in the storm.', zh: '她建議他不要在暴風雨中開車。（not + 原形）' },
        { en: '<b>It is vital</b> that this information <b>not be</b> shared with anyone.', zh: '這個資訊不被分享是至關重要的。' }
      ],
      preClassGuidance: { text: '觀察：「She suggests that he goes.」（一般時態）vs.「She suggests that he go.」（虛擬語氣）。第二句的 go 不加 s，為什麼？因為在 suggest/recommend 等動詞後面使用的是虛擬語氣。', examples: 'suggest that he go / insist that she be / It is important that we arrive...' },
      exercises: [
        { type: 'fill', question: 'The teacher suggested that every student _____ (read) the book.', hint: '虛擬語氣：suggest + that + 原形動詞（不管主詞是誰）。', answer: 'read', explanation: '虛擬語氣動詞用原形 "read"（不是 reads）。' },
        { type: 'fill', question: 'It is important that she _____ (be) here by 9 a.m.', hint: 'It is important that... 後面用什麼形式？', answer: 'be', explanation: '虛擬語氣：It is important that she be here.（be 不是 is）' }
      ],
      summary: ['suggest/recommend/insist/demand + that + 原形動詞', 'It is important/essential/vital + that + 原形動詞', '否定形式：not + 原形動詞（不用 doesn\'t）', '英式替代：should + 原形', '虛擬語氣不受主詞人稱或時態影響'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'She insisted that he _____ (apologize).', hint: 'insist + that + 什麼形式？', answer: 'apologize', explanation: '虛擬語氣用原形 "apologize"（不是 apologizes）。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'It is essential that the president _____ (not / reveal) this information. The committee recommended that a new policy _____ (be / implement).', hint: '否定虛擬語氣 = not + 原形。被動虛擬語氣 = be + p.p.', answer: 'not reveal, be implemented', explanation: '否定用 "not reveal"（不是 doesn\'t reveal）。被動用 "be implemented"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '判斷哪些句子需要虛擬語氣：(A) I hope that she _____ (come) tomorrow. (B) I suggest that she _____ (come) tomorrow. (C) I know that she _____ (come) tomorrow.', hint: '只有 suggest 類動詞才需要虛擬語氣。hope 和 know 用正常時態。', answer: '(A) comes/will come, (B) come, (C) is coming/will come', explanation: '只有 (B) suggest 用虛擬語氣 "come"。(A) hope 和 (C) know 用一般時態。' }
      ]
    },

    'c1-4': {
      id: 'c1-4',
      level: 'c1',
      unitNumber: 4,
      title: '[C1] 推測過去的情態動詞',
      titleEn: 'Modal Perfects — Must Have / Can\'t Have / Might Have',
      description: '學習使用情態動詞 + have + p.p. 來對過去的事件做推測、表達可能性或遺憾。',
      rules: [
        { title: '規則一：must have + p.p.（一定是...了）', desc: '對過去事件的強烈肯定推測。「一定已經...了」。', pattern: 'She must have forgotten. (她一定是忘了) / He must have been tired. (他一定很累)' },
        { title: '規則二：can\'t/couldn\'t have + p.p.（不可能...了）', desc: '對過去事件的強烈否定推測。「不可能已經...了」。', pattern: 'He can\'t have done it. (他不可能做了這件事) / She couldn\'t have known. (她不可能知道)' },
        { title: '規則三：might/may/could have + p.p.（可能...了）', desc: '對過去事件的不確定推測。「也許已經...了」。', pattern: 'She might have gone home. (她可能回家了) / He could have been lying. (他可能在撒謊)' },
        { title: '規則四：should have + p.p.（應該...卻沒有）', desc: '表達對過去的遺憾或批評。「當時應該做...但沒做」。', pattern: 'You should have told me! (你應該告訴我的！) / I shouldn\'t have eaten so much. (我不該吃那麼多)' }
      ],
      examples: [
        { en: 'She\'s not here. She <b>must have left</b> already.', zh: '她不在。她一定已經離開了。' },
        { en: 'He <b>can\'t have stolen</b> the money — he was with me all day.', zh: '他不可能偷了那些錢——他整天都跟我在一起。' },
        { en: 'I\'m not sure where Tom is. He <b>might have gone</b> to the gym.', zh: '我不確定 Tom 在哪。他可能去健身房了。' },
        { en: 'You <b>should have called</b> me! I was worried.', zh: '你應該打給我的！我很擔心。' },
        { en: 'I <b>shouldn\'t have said</b> that. I\'m sorry.', zh: '我不應該說那些話的。對不起。' },
        { en: 'She <b>could have been</b> a great pianist if she had practiced more.', zh: '如果她多練習的話，她可能會成為一位偉大的鋼琴家。' }
      ],
      preClassGuidance: { text: '看到一個空的蛋糕盤。你可以推測：「Someone must have eaten it.」（一定被吃了）「The cat might have knocked it off.」（也許被貓打翻了）「It can\'t have disappeared by itself.」（不可能自己消失）', examples: 'must have eaten / can\'t have disappeared / might have knocked / should have saved some' },
      exercises: [
        { type: 'fill', question: 'The ground is wet. It _____ _____ _____ (rain) last night.', hint: '地是濕的→對過去的強烈推測（一定下過雨了）。', answer: 'must have rained', explanation: '強烈肯定推測用 "must have rained"。' },
        { type: 'fill', question: 'You look terrible. You _____ _____ _____ (sleep) well.', hint: '你看起來很糟→推測昨晚一定沒睡好。can\'t have...', answer: "can't have slept", explanation: '看起來很糟→不可能睡好了 "can\'t have slept well"。' }
      ],
      summary: ['must have + p.p. = 一定...了（強烈肯定推測）', 'can\'t/couldn\'t have + p.p. = 不可能...了（強烈否定推測）', 'might/may/could have + p.p. = 可能...了（不確定推測）', 'should have + p.p. = 應該做但沒做（遺憾/批評）', 'shouldn\'t have + p.p. = 不應該做但做了（後悔）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'I can\'t find my keys. I _____ _____ _____ (leave) them at the office.', hint: '可能把鑰匙留在辦公室了（不確定推測）。', answer: 'might/may have left', explanation: '不確定推測用 "might/may have left"。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'She didn\'t come to the party. She _____ _____ _____ (not / get) the invitation. Or she _____ _____ _____ (decide) not to come.', hint: '第一句：可能沒收到（可能）。第二句：也許決定不來（可能）。', answer: 'might/may not have got/gotten, might/could have decided', explanation: '兩句都是不確定推測，用 might/may/could have。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '為每個情態動詞選擇正確的推測強度：我的包掉了。(A) Someone _____ have taken it. (一定) (B) Someone _____ have taken it. (可能) (C) He _____ have taken it — he wasn\'t even there. (不可能)', hint: '(A) 一定 = must (B) 可能 = might (C) 不可能 = can\'t', answer: 'must, might/could, can\'t', explanation: '(A) must have（一定）, (B) might/could have（可能）, (C) can\'t have（不可能）。' }
      ]
    },

    'c1-5': {
      id: 'c1-5',
      level: 'c1',
      unitNumber: 5,
      title: '[C1] 分詞構句',
      titleEn: 'Participle Clauses — Present & Past Participles',
      description: '學習使用現在分詞（V-ing）和過去分詞（V-ed/p.p.）構句來簡化從屬子句，使句子更精煉。',
      rules: [
        { title: '規則一：現在分詞構句（V-ing）', desc: '當兩個子句的主詞相同，且從屬子句為主動語態時，可簡化為 V-ing 開頭。', pattern: 'Because she felt tired, she went to bed. → Feeling tired, she went to bed.' },
        { title: '規則二：過去分詞構句（p.p.）', desc: '當從屬子句為被動語態時，用過去分詞開頭。', pattern: 'Because it was built in 1900, the house is old. → Built in 1900, the house is very old.' },
        { title: '規則三：Having + p.p.（完成分詞構句）', desc: '表示分詞子句的動作「先於」主要子句發生。強調先後順序。', pattern: 'After she had finished her homework, she went out. → Having finished her homework, she went out.' },
        { title: '規則四：懸垂分詞（Dangling Participle）注意', desc: '分詞構句的隱含主詞必須與主要子句的主詞一致。不一致就是「懸垂分詞」（錯誤）。', pattern: '✗ Walking to school, the rain started. (雨在走路？) ✓ Walking to school, I got caught in the rain.' }
      ],
      examples: [
        { en: '<b>Feeling</b> hungry, I ordered a pizza.', zh: '覺得餓了，我點了一個披薩。' },
        { en: '<b>Not knowing</b> what to say, she remained silent.', zh: '不知道該說什麼，她保持沉默。' },
        { en: '<b>Built</b> over 100 years ago, the bridge is still in use.', zh: '這座橋建造於一百多年前，至今仍在使用中。' },
        { en: '<b>Having finished</b> the project, they celebrated.', zh: '完成專案後，他們慶祝了一番。' },
        { en: '<b>Surrounded</b> by mountains, the village is very peaceful.', zh: '被群山環繞，這個村莊非常寧靜。' },
        { en: '<b>Speaking</b> of which, have you read the report?', zh: '說到這個，你讀了那份報告嗎？' }
      ],
      preClassGuidance: { text: '觀察兩個版本：「Because she was tired, she sat down.」→「Being tired, she sat down.」→「Tired, she sat down.」分詞構句省略了連接詞和重複的主詞，讓句子更簡潔。', examples: 'Feeling tired, she... / Built in 1900, the house... / Having finished, they... / Not knowing what to do, I...' },
      exercises: [
        { type: 'fill', question: '_____ (Live) near the beach, she goes swimming every day.', hint: '住在海邊（主動、同時間）→現在分詞。', answer: 'Living', explanation: '主動語態用現在分詞 "Living near the beach, she goes swimming..."' },
        { type: 'fill', question: '_____ (Write) in 1925, this novel is still popular today.', hint: '這本小說是「被寫」的（被動）→過去分詞。', answer: 'Written', explanation: '被動語態用過去分詞 "Written in 1925, this novel..."' }
      ],
      summary: ['V-ing 構句：主動語態的從屬子句簡化', 'p.p. 構句：被動語態的從屬子句簡化', 'Having + p.p.：表示先發生的動作', 'Not + V-ing：否定的分詞構句', '分詞主詞必須與主要子句主詞一致（避免懸垂分詞）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '_____ (Not / want) to be late, he took a taxi.', hint: '不想遲到（主動、否定）→ Not + V-ing。', answer: 'Not wanting', explanation: '否定分詞構句：Not wanting to be late, he took a taxi.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '改寫為分詞構句：After she had read the letter, she started crying. → _____ _____ the letter, she started crying.', hint: '先讀了信再哭（先後順序，主動）→ Having + p.p.', answer: 'Having read', explanation: '先後順序用 Having + p.p.。Having read the letter, she started crying.' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '判斷正誤：(A) Walking down the street, I saw an old friend. (B) Walking down the street, a car nearly hit me. — 哪句有懸垂分詞的問題？正確版本怎麼寫？', hint: '(A) 誰在走路？我 → 正確。(B) 誰在走路？車？→ 懸垂分詞！', answer: '(B) 有誤。正確：Walking down the street, I was nearly hit by a car. 或 While I was walking down the street, a car nearly hit me.', explanation: '(A) 正確（I 在走路）。(B) 懸垂分詞（a car 不會走路）。要改成「I was nearly hit」使主詞一致。' }
      ]
    },

    // C1 UNITS (6-10)
    'c1-6': {
      id: 'c1-6',
      level: 'c1',
      unitNumber: 6,
      title: '[C1] 名詞子句',
      titleEn: 'Noun Clauses — That / Wh- / Whether Clauses',
      description: '學習名詞子句作為主詞、受詞和補語的用法，包括 that 子句、wh- 子句和 whether/if 子句。',
      rules: [
        { title: '規則一：that 子句作受詞', desc: 'that 子句放在動詞後面當受詞（think, believe, know, say, hope 等）。口語中 that 常省略。', pattern: 'I think (that) she is right. / He said (that) he would come.' },
        { title: '規則二：that 子句作主詞', desc: 'that 子句放在句首當主詞（正式）。口語常用 It is... that 替代。', pattern: 'That he passed the exam surprises me. = It surprises me that he passed the exam.' },
        { title: '規則三：wh- 子句（間接問句）', desc: 'who/what/where/when/why/how 引導的子句，用陳述句語序（不倒裝）。', pattern: 'I don\'t know where she lives. (不是 where does she live) / Tell me what happened.' },
        { title: '規則四：whether/if 子句', desc: '表示「是否」。whether 比 if 更正式，且可用在介系詞後和 to V 前。', pattern: 'I wonder whether/if he will come. / It depends on whether you agree. (不能用 if)' }
      ],
      examples: [
        { en: 'I believe <b>that</b> everyone deserves a second chance.', zh: '我相信每個人都值得再一次機會。' },
        { en: '<b>That</b> she arrived on time surprised everyone.', zh: '她準時到達這件事讓大家驚訝。' },
        { en: 'Do you know <b>where</b> the nearest station <b>is</b>?', zh: '你知道最近的車站在哪裡嗎？（陳述句語序）' },
        { en: 'I\'m not sure <b>whether</b> I should accept the offer.', zh: '我不確定是否應該接受這個提議。' },
        { en: '<b>What</b> he said <b>was</b> completely true.', zh: '他說的話完全是事實。（what 子句當主詞）' },
        { en: 'The question is <b>whether</b> we can afford it.', zh: '問題是我們是否負擔得起。（whether 子句當補語）' }
      ],
      preClassGuidance: { text: '觀察：直接問句 "Where does she live?" 變成間接問句時語序要改變 → "I don\'t know where she lives."。why/how/what/when 等也一樣，子句中不倒裝。', examples: 'I think that... / I wonder whether... / Do you know where... / What he said was...' },
      exercises: [
        { type: 'fill', question: 'I don\'t know where she _____ (live).', hint: '間接問句用陳述句語序，she 後面的動詞形式？', answer: 'lives', explanation: '間接問句不倒裝：where she lives（不是 where does she live）。' },
        { type: 'fill', question: '_____ he lied to us is very disappointing.', hint: '「他對我們撒謊（這件事）很令人失望」。什麼引導主詞子句？', answer: 'That', explanation: 'That 引導名詞子句作主詞。That he lied to us is very disappointing.' }
      ],
      summary: ['that 子句作受詞：I think that... / She said that...', 'that 子句作主詞：That + S + V... is... 或 It is... that', 'wh- 子句用陳述句語序（不倒裝）', 'whether/if = 是否（whether 更正式）', '名詞子句可作主詞、受詞、補語'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Can you tell me what time the meeting _____ (start)?', hint: '間接問句不倒裝：what time + 陳述句語序。', answer: 'starts', explanation: '間接問句：what time the meeting starts（不是 does the meeting start）。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'It depends on _____ you are available or not. (whether / if) _____ she decided to resign remains a mystery. (What / That)', hint: '介系詞後面用 whether 還是 if？「她辭職（這件事）」用什麼引導？', answer: 'whether, That', explanation: '介系詞後只能用 "whether"（不能用 if）。that 引導主詞子句。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '改正語序錯誤：(A) I wonder where does he work. (B) She asked me what was I doing. (C) Nobody knows why did she leave.', hint: '間接問句全部要改成陳述句語序。', answer: '(A) I wonder where he works. (B) She asked me what I was doing. (C) Nobody knows why she left.', explanation: '間接問句不倒裝：where he works / what I was doing / why she left。' }
      ]
    },

    'c1-7': {
      id: 'c1-7',
      level: 'c1',
      unitNumber: 7,
      title: '[C1] 進階轉述句',
      titleEn: 'Advanced Reported Speech — Questions, Commands & Mixed',
      description: '學習轉述問句、命令、請求和建議等多種句型，包括時態回推、代名詞調整和混合轉述。',
      rules: [
        { title: '規則一：轉述問句（Yes/No 問句）', desc: '用 ask + if/whether + 陳述句語序。', pattern: '"Are you coming?" → She asked if/whether I was coming.' },
        { title: '規則二：轉述問句（Wh- 問句）', desc: '用 ask + wh- + 陳述句語序。不加問號。', pattern: '"Where do you live?" → He asked where I lived.' },
        { title: '規則三：轉述命令/請求', desc: '用 tell/ask/order/advise + 人 + (not) to + V。', pattern: '"Open the door." → She told me to open the door. / "Don\'t be late." → He told us not to be late.' },
        { title: '規則四：混合轉述與特殊動詞', desc: '用 suggest + V-ing / offer to V / promise to V / refuse to V / warn + 人 + (not) to V 等來精確表達語氣。', pattern: '"Let\'s eat out." → She suggested eating out. / "I\'ll help you." → He offered to help me.' }
      ],
      examples: [
        { en: '"Do you like coffee?" → She <b>asked</b> me <b>if</b> I <b>liked</b> coffee.', zh: '她問我是否喜歡咖啡。' },
        { en: '"What are you doing?" → He <b>asked</b> me <b>what</b> I <b>was doing</b>.', zh: '他問我在做什麼。' },
        { en: '"Please sit down." → She <b>asked</b> me <b>to sit</b> down.', zh: '她請我坐下。' },
        { en: '"Don\'t touch that!" → He <b>told</b> us <b>not to touch</b> that.', zh: '他叫我們不要碰那個。' },
        { en: '"Let\'s go to the park." → She <b>suggested going</b> to the park.', zh: '她建議去公園。' },
        { en: '"I\'ll pay for dinner." → He <b>offered to pay</b> for dinner.', zh: '他主動提出要付晚餐的錢。' }
      ],
      preClassGuidance: { text: '轉述句的三大變化：(1) 時態回推 (2) 代名詞調整 (3) 時間/地點詞調整。問句的轉述還要把倒裝改回正常語序、去掉問號。', examples: 'asked if... / asked where... / told me to... / suggested V-ing / offered to V' },
      exercises: [
        { type: 'fill', question: '"Where is the bank?" → She asked me where the bank _____.', hint: '時態回推：is → was。間接問句不倒裝。', answer: 'was', explanation: '轉述問句：She asked me where the bank was.（is→was，不倒裝）' },
        { type: 'fill', question: '"Don\'t forget your keys." → She _____ me _____ _____ forget my keys.', hint: '轉述否定命令：told + 人 + not to + V。', answer: 'told/reminded, not to', explanation: '轉述否定命令：She told me not to forget my keys.' }
      ],
      summary: ['Yes/No 問句：ask + if/whether + 陳述句語序', 'Wh- 問句：ask + wh- + 陳述句語序', '命令/請求：tell/ask + 人 + (not) to V', '建議：suggest + V-ing', '各種語氣：offer to / promise to / refuse to / warn + 人 + not to'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '"Have you ever been to Japan?" → She asked me _____ I _____ ever _____ to Japan.', hint: '是非問句用 if/whether，時態回推。', answer: 'if/whether, had, been', explanation: 'have been → had been（時態回推）。She asked me if I had ever been to Japan.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '"I\'ll definitely be there." → He _____ _____ be there. "Shall we take a break?" → She _____ _____ a break.', hint: 'I\'ll definitely = 承諾。Shall we = 建議。', answer: 'promised to, suggested taking', explanation: 'promised to be there / suggested taking a break。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '將以下對話轉述：Tom: "Where did you buy this?" Lisa: "I bought it online. Don\'t tell anyone!" → Tom asked Lisa _____. Lisa said _____ and told him _____.', hint: '轉述問句（wh-）+ 轉述陳述句 + 轉述否定命令。', answer: 'where she had bought it/that, she had bought it online, not to tell anyone', explanation: 'Tom asked where she had bought it. Lisa said she had bought it online and told him not to tell anyone.' }
      ]
    },

    'c1-8': {
      id: 'c1-8',
      level: 'c1',
      unitNumber: 8,
      title: '[C1] 前置與強調結構',
      titleEn: 'Fronting & Emphasis Structures',
      description: '學習將句子成分移到句首以達到強調效果，包括受詞前置、補語前置和 so/such 與 neither/nor 的倒裝。',
      rules: [
        { title: '規則一：受詞或補語前置', desc: '將受詞或補語移至句首以強調。較為正式或文學性。', pattern: 'This I cannot accept. (我無法接受這個) / Brilliant was the performance. (表演精彩極了)' },
        { title: '規則二：So + adj/adv... that 倒裝', desc: '當 so + 形容詞/副詞放在句首時，主要子句要倒裝。', pattern: 'He was so tired that he fell asleep. → So tired was he that he fell asleep.' },
        { title: '規則三：Neither/Nor + 助動詞 + 主詞', desc: '表示「我也不...」，用 neither/nor + 助動詞 + 主詞。反向：So + 助動詞 + 主詞 = 「我也是」。', pattern: '"I don\'t like it." "Neither/Nor do I." ｜ "I love it." "So do I."' },
        { title: '規則四：Under no circumstances / On no account', desc: '這些否定短語放在句首時，需要倒裝。表示「在任何情況下都不」。', pattern: 'Under no circumstances should you open this door. / On no account must this be repeated.' }
      ],
      examples: [
        { en: '<b>This</b> I <b>cannot</b> accept.', zh: '這個我無法接受。（受詞前置強調 this）' },
        { en: '<b>So</b> beautiful <b>was</b> the sunset <b>that</b> everyone stopped to watch.', zh: '日落如此美麗，每個人都停下來觀看。' },
        { en: '"I haven\'t been to Paris." "<b>Neither have</b> I."', zh: '「我沒去過巴黎。」「我也沒有。」' },
        { en: '"I love sushi." "<b>So do</b> I."', zh: '「我愛壽司。」「我也是。」' },
        { en: '<b>Under no circumstances</b> <b>should</b> you leave the building.', zh: '在任何情況下你都不應該離開大樓。' },
        { en: '<b>Such</b> was his anger <b>that</b> he couldn\'t speak.', zh: '他的憤怒如此之大，以至於說不出話。' }
      ],
      preClassGuidance: { text: '觀察 "So do I" 和 "Neither do I" 的結構：這是用 so/neither + 助動詞 + 主詞 來表示「我也是/我也不」。如果前句用 have，回答就用 so have I / neither have I。', examples: 'So do I. / Neither can she. / So tired was he that... / This I cannot accept.' },
      exercises: [
        { type: 'fill', question: '"I can speak Spanish." "_____ _____ I."', hint: '「我也會」→ So + 助動詞 + 主詞。', answer: 'So can', explanation: '"So can I" 表示我也會說西班牙文。' },
        { type: 'fill', question: '"I haven\'t finished yet." "_____ _____ I."', hint: '「我也沒有」→ Neither + 助動詞 + 主詞。', answer: 'Neither have', explanation: '"Neither have I" 表示我也還沒完成。' }
      ],
      summary: ['受詞/補語前置：This I cannot accept. 強調特定元素', 'So + adj + 倒裝... that：強調程度', 'So + 助動詞 + 主詞 = 我也是', 'Neither/Nor + 助動詞 + 主詞 = 我也不', 'Under no circumstances / On no account + 倒裝 = 在任何情況下都不'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '"I don\'t eat meat." "_____ _____ my sister."', hint: '「我姊姊也不吃」→ Neither + 助動詞 + 主詞。', answer: 'Neither does', explanation: 'Neither does my sister. = 我姊姊也不吃肉。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '改寫為倒裝強調句：He was so exhausted that he collapsed. → So _____ _____ he that he collapsed.', hint: '把 so + adj 移到句首，倒裝。', answer: 'exhausted was', explanation: 'So exhausted was he that he collapsed.（was 移到 he 前面）' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '根據前句回應：(A) "I love this song." → "_____ _____ I." (B) "She shouldn\'t go." → "_____ _____ he." (C) "We have never seen this." → "_____ _____ they."', hint: '分別用 So/Neither 搭配正確的助動詞。', answer: '(A) So do, (B) Neither should, (C) Neither have', explanation: '(A) So do I（我也喜歡）。(B) Neither should he（他也不應該）。(C) Neither have they（他們也沒有）。' }
      ]
    },

    'c1-9': {
      id: 'c1-9',
      level: 'c1',
      unitNumber: 9,
      title: '[C1] 替代與省略',
      titleEn: 'Substitution & Ellipsis',
      description: '學習使用 do so, one/ones, that/those, so/not 等替代詞和省略結構來避免重複，使語言更簡潔。',
      rules: [
        { title: '規則一：do so / do it / do that', desc: '用 do so 代替前面提到的動作，正式。do it/do that 較口語。', pattern: '"She promised to call, and she did so." / "If you want to apply, please do so by Friday."' },
        { title: '規則二：one / ones 替代名詞', desc: 'one 替代可數單數名詞，ones 替代可數複數名詞。避免重複前面提過的名詞。', pattern: 'I need a pen. Do you have one? / "Which shoes?" "The red ones."' },
        { title: '規則三：so / not 替代子句', desc: '用 so 替代肯定子句，not 替代否定子句。常與 think, believe, hope, expect, be afraid 連用。', pattern: '"Is it going to rain?" "I think so." / "I hope not." / "I\'m afraid so."' },
        { title: '規則四：省略（Ellipsis）', desc: '在對話和並列結構中，可以省略重複的動詞、助動詞或子句。', pattern: '"Can you swim?" "Yes, I can." (省略 swim) / She plays piano and he (plays) guitar.' }
      ],
      examples: [
        { en: 'She said she would help and she <b>did so</b>.', zh: '她說她會幫忙，而且她確實做了。' },
        { en: '"Which jacket do you prefer?" "The blue <b>one</b>."', zh: '「你喜歡哪件夾克？」「藍色那件。」' },
        { en: '"Will they win?" "I <b>hope so</b>."', zh: '「他們會贏嗎？」「我希望是。」' },
        { en: '"Is the meeting cancelled?" "I\'m afraid <b>not</b>."', zh: '「會議取消了嗎？」「恐怕沒有。」' },
        { en: 'She can speak French and her brother <b>can too</b>.', zh: '她會說法文，她哥哥也會。（省略 speak French）' },
        { en: '"Are you coming to the party?" "I\'d like <b>to</b>."', zh: '「你會來派對嗎？」「我想去。」（省略 come to the party）' }
      ],
      preClassGuidance: { text: '在英語對話中，避免重複是很重要的。比較：「Do you have a pen? I need a pen.」→「Do you have a pen? I need one.」用 "one" 代替重複的 "pen" 更自然。', examples: 'the blue one / I think so / I hope not / did so / I\'d like to' },
      exercises: [
        { type: 'fill', question: '"Is it going to snow?" "I hope _____."', hint: '希望不會下雪，用什麼簡短代替整個否定子句？', answer: 'not', explanation: '"I hope not." = I hope it is not going to snow.（用 not 代替否定子句）' },
        { type: 'fill', question: 'I don\'t have a dictionary. Can I borrow _____?', hint: '用什麼代替 "a dictionary" 避免重複？', answer: 'one', explanation: '"one" 替代前面提到的可數單數名詞 "a dictionary"。' }
      ],
      summary: ['do so / do it / do that 代替已提到的動作', 'one/ones 代替可數名詞避免重複', 'I think so / I hope not → so/not 代替子句', '省略：省略重複的動詞部分（Yes, I can.）', 'I\'d like to → 保留 to，省略後面的動詞'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '"Will the boss be angry?" "I\'m afraid _____."', hint: '恐怕會（用什麼替代肯定子句）？', answer: 'so', explanation: '"I\'m afraid so." = I\'m afraid he will be angry.（so 代替肯定子句）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: 'I wanted to call her, but I didn\'t have time to _____ _____. "Which earrings do you like?" "The silver _____."', hint: '省略 call her → 保留 to 就好。替代複數名詞 earrings。', answer: 'do so, ones', explanation: '"to do so" 代替 "to call her"。"ones" 代替複數名詞 "earrings"。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '為以下對話選擇正確的替代/省略：A: "Do you think it will rain?" B: "I think ___." A: "I hope ___." B: "Can you bring an umbrella?" A: "I don\'t have ___."', hint: 'think + 肯定用 so。hope + 否定用 not。替代 an umbrella 用 one。', answer: 'so, not, one', explanation: 'I think so（我想會）。I hope not（希望不會）。I don\'t have one（我沒有傘）。' }
      ]
    },

    'c1-10': {
      id: 'c1-10',
      level: 'c1',
      unitNumber: 10,
      title: '[C1] 正式與非正式語域',
      titleEn: 'Formal vs. Informal Register',
      description: '學習區分正式與非正式英語的文法差異，包括用詞、句型結構和語氣調整，並能根據場合切換語域。',
      rules: [
        { title: '規則一：正式替代用語', desc: '正式英語使用較長的拉丁語源詞彙和完整結構。非正式英語使用較短的日耳曼語源詞和縮寫。', pattern: '非正式：get → 正式：obtain / 非正式：ask for → 正式：request / 非正式：help → 正式：assist' },
        { title: '規則二：正式文法結構', desc: '正式英語避免縮寫、使用被動語態、避免以介系詞結尾、使用完整的關係子句。', pattern: '非正式：Who are you waiting for? → 正式：For whom are you waiting?' },
        { title: '規則三：語氣緩和（Hedging）', desc: '正式場合使用 tend to, would appear, it seems that, it could be argued 等來緩和語氣，避免「太直接」。', pattern: '非正式：He\'s wrong. → 正式：It would appear that his assessment may be inaccurate.' },
        { title: '規則四：正式信件/郵件用語', desc: '學術和商業寫作有固定的開頭和結尾格式。', pattern: '開頭：I am writing to inform you... / With regard to your inquiry... / 結尾：Should you require any further information, please do not hesitate to contact me.' }
      ],
      examples: [
        { en: '非正式：I <b>wanna</b> know if you <b>can</b> help. → 正式：I <b>would like to</b> inquire <b>whether</b> you might <b>be able to assist</b>.', zh: '非正式→正式的語域轉換。' },
        { en: '非正式：<b>Thanks for</b> your email. → 正式：<b>Thank you for</b> your correspondence.', zh: '感謝用語的正式替換。' },
        { en: '非正式：We <b>can\'t</b> do that. → 正式：We <b>are unable to</b> accommodate that request.', zh: '拒絕的正式表達。' },
        { en: '非正式：I <b>think</b> he\'s wrong. → 正式：<b>It would appear</b> that his analysis <b>may contain</b> some inaccuracies.', zh: '用語氣緩和來表達不同意。' },
        { en: '正式：<b>Should you have</b> any questions, please <b>do not hesitate</b> to contact us.', zh: '如有任何疑問，請隨時與我們聯繫。' },
        { en: '正式：The results <b>suggest that</b> there <b>may be</b> a correlation.', zh: '結果顯示可能存在相關性。（學術語氣緩和）' }
      ],
      preClassGuidance: { text: '比較寫給朋友的訊息和寫給教授的郵件：「Hey! Can you help me with this?」→「Dear Professor, I am writing to request your assistance regarding...」什麼時候用正式？什麼時候用非正式？', examples: '非正式：wanna, gonna, thanks → 正式：would like to, intend to, thank you / can\'t → are unable to' },
      exercises: [
        { type: 'fill', question: '將非正式改為正式：I wanna ask about the job. → I _____ _____ _____ inquire about the position.', hint: 'wanna = want to，正式版是 would like to。', answer: 'would like to', explanation: '正式版：I would like to inquire about the position.（would like to 取代 wanna）' },
        { type: 'fill', question: '正式信件結尾：Should you _____ any further information, please do not _____ to contact us.', hint: '常見正式結尾語句。', answer: 'require, hesitate', explanation: 'Should you require any further information, please do not hesitate to contact us.' }
      ],
      summary: ['正式用語替代：get→obtain, help→assist, ask for→request', '正式結構：避免縮寫、使用被動、完整句型', '語氣緩和（Hedging）：tend to, would appear, it seems that', '正式信件：I am writing to... / Should you require...', '根據場合（學術、商業、日常）切換語域'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '將非正式改為正式：I can\'t come to the meeting. → I _____ _____ _____ _____ attend the meeting.', hint: 'can\'t → 正式的「無法」。', answer: 'am unable to / will be unable to', explanation: '正式版：I am unable to attend the meeting.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '用語氣緩和改寫：This method is wrong. → It _____ _____ that this method _____ _____ some limitations.', hint: '不直接說 wrong，而是說「看起來可能有一些限制」。', answer: 'would appear, may have / might have', explanation: '語氣緩和：It would appear that this method may have some limitations.' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '完成正式商業郵件：Dear Mr. Chen, I _____ _____ to inform you that your application has been received. _____ _____ _____ any questions, please _____ _____ _____ to contact our office. Yours sincerely, ...', hint: '正式開頭 + 正式結尾。', answer: 'am writing, Should you have, do not hesitate', explanation: 'I am writing to inform you...（正式開頭）。Should you have any questions, please do not hesitate to contact...（正式結尾）。' }
      ]
    },

    // =====================
    // C2 UNITS (1-5)
    // =====================
    'c2-1': {
      id: 'c2-1',
      level: 'c2',
      unitNumber: 1,
      title: '[C2] 進階倒裝與前置',
      titleEn: 'Advanced Inversion & Fronting in Discourse',
      description: '精通各種倒裝結構在真實語境中的運用，包括 so/such 倒裝、地點副詞倒裝、as 讓步倒裝等。',
      rules: [
        { title: '規則一：地點/方向副詞倒裝', desc: '地點或方向副詞（here, there, up, down, away, out）放在句首時，主詞和動詞可以完全倒裝（主詞為名詞時）。代名詞作主詞則不倒裝。', pattern: 'Here comes the bus. (✓) / Here it comes. (✓，代名詞不倒裝) / Down fell the tree.' },
        { title: '規則二：As 讓步倒裝', desc: '形容詞/副詞/名詞 + as + S + V，表示「儘管...」。非常正式且文學性。', pattern: 'Tired as he was, he continued working. = Although he was tired, he continued.' },
        { title: '規則三：No sooner... than / Hardly... when', desc: '表示「一...就...」。no sooner / hardly 放句首時，第一子句倒裝。', pattern: 'No sooner had I sat down than the phone rang. / Hardly had she arrived when it started raining.' },
        { title: '規則四：Little / At no time / In no way', desc: '各種否定副詞或短語放句首的倒裝形式。', pattern: 'Little did I know that... / At no time did he mention... / In no way is this acceptable.' }
      ],
      examples: [
        { en: '<b>Here comes</b> the bride!', zh: '新娘來了！（地點副詞倒裝）' },
        { en: '<b>Away flew</b> the birds when the cat appeared.', zh: '貓出現時，鳥飛走了。' },
        { en: '<b>Tired as</b> she was, she finished the marathon.', zh: '儘管她很累，她跑完了馬拉松。' },
        { en: '<b>No sooner had</b> I opened the door <b>than</b> the dog ran out.', zh: '我一開門，狗就跑了出去。' },
        { en: '<b>Little did</b> they <b>know</b> that the surprise party was being planned.', zh: '他們一點也不知道驚喜派對正在籌備中。' },
        { en: '<b>At no time</b> <b>were</b> the passengers in danger.', zh: '乘客在任何時候都沒有處於危險之中。' }
      ],
      preClassGuidance: { text: '你已經學過基本倒裝。現在觀察更進階的結構：「Tired as he was...」看起來像什麼意思？它其實是 Although he was tired 的文學表達。而 "No sooner had I... than" 表達了「一...就...」的精確時間關係。', examples: 'Here comes... / Tired as she was... / No sooner had... than / Little did I know...' },
      exercises: [
        { type: 'fill', question: 'No sooner _____ we _____ (arrive) than it started to snow.', hint: '一到就下雪了。No sooner 開頭要倒裝，用過去完成式。', answer: 'had, arrived', explanation: '倒裝：No sooner had we arrived than...（had 移到主詞前）。' },
        { type: 'fill', question: '_____ as it _____ (seem), the story is absolutely true.', hint: '儘管看起來很奇怪（strange），故事是真的。As 讓步倒裝。', answer: 'Strange, seems/may seem', explanation: 'As 讓步倒裝：Strange as it seems, the story is true.（形容詞放句首）' }
      ],
      summary: ['地點/方向副詞倒裝：Here comes... / Away flew...', 'As 讓步倒裝：形容詞 + as + S + V = 儘管...', 'No sooner... than / Hardly... when = 一...就...', 'Little/At no time/In no way + 倒裝', '代名詞作主詞時不完全倒裝'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Hardly _____ she _____ (finish) speaking when everyone applauded.', hint: 'Hardly + 過去完成式倒裝... when...', answer: 'had, finished', explanation: 'Hardly had she finished speaking when everyone applauded.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '改寫為 as 讓步倒裝：Although he is intelligent, he lacks common sense. → _____ _____ he _____, he lacks common sense.', hint: '把形容詞 intelligent 移到句首，用 as 連接。', answer: 'Intelligent as, is', explanation: 'Intelligent as he is, he lacks common sense.' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '用三種不同的倒裝結構改寫：I didn\'t realize at all that she was so wealthy. → (A) Little _____ I _____ that... (B) _____ _____ _____ did I realize that... (C) Not until later _____ I _____ that...', hint: '(A) Little+倒裝 (B) At no time+倒裝 (C) Not until+倒裝', answer: '(A) did, realize/know, (B) At no time, (C) did, realize/discover', explanation: '(A) Little did I realize... (B) At no time did I realize... (C) Not until later did I realize...' }
      ]
    },

    'c2-2': {
      id: 'c2-2',
      level: 'c2',
      unitNumber: 2,
      title: '[C2] 名詞化',
      titleEn: 'Nominalization — Turning Verbs & Adjectives into Nouns',
      description: '學習將動詞和形容詞轉化為名詞形式，以提升學術和正式寫作的精確度與客觀性。',
      rules: [
        { title: '規則一：動詞 → 名詞的轉化', desc: '動詞可以透過加上字尾（-tion, -ment, -ance, -ence, -al, -ure 等）轉化為名詞。', pattern: 'develop → development / investigate → investigation / fail → failure / arrive → arrival' },
        { title: '規則二：形容詞 → 名詞的轉化', desc: '形容詞可以透過加上字尾（-ness, -ity, -ence, -ance 等）轉化為名詞。', pattern: 'important → importance / different → difference / happy → happiness / able → ability' },
        { title: '規則三：名詞化在學術寫作中的功能', desc: '使用名詞化可以讓句子更客觀、更精簡、更正式。去除施動者（誰做了什麼）使焦點轉移到事件本身。', pattern: '非正式：The team discovered that... → 正式：The discovery of... ｜ 非正式：People are increasingly aware... → 正式：The increasing awareness...' },
        { title: '規則四：名詞化的句式重組', desc: '名詞化後需要搭配適當的動詞（如 make, reach, give, carry out, achieve）和介系詞（of, in, to）。', pattern: 'They decided to... → They made a decision to... / The economy grew → The growth of the economy / They investigated → They carried out an investigation' }
      ],
      examples: [
        { en: '口語：They <b>discovered</b> a new species. → 學術：<b>The discovery</b> of a new species was reported.', zh: '名詞化讓句子更客觀正式。' },
        { en: '口語：We need to <b>improve</b> air quality. → 正式：<b>The improvement</b> of air quality is essential.', zh: '將動詞轉為名詞，改變句型結構。' },
        { en: '口語：She <b>failed</b> the exam. → 正式：Her <b>failure</b> in the exam was unexpected.', zh: '名詞化使語氣更中性客觀。' },
        { en: '口語：People <b>argued</b> a lot. → 正式：There was considerable <b>argument</b>.', zh: '去除施動者，凸顯事件本身。' },
        { en: 'The government <b>implemented</b> the policy. → <b>The implementation</b> of the policy brought significant changes.', zh: '配合名詞化使用介系詞 of。' },
        { en: 'They <b>agreed</b> to cooperate. → They <b>reached an agreement</b> on cooperation.', zh: '名詞化搭配動詞 reach。' }
      ],
      preClassGuidance: { text: '比較兩個版本：「The company failed because costs increased.」→「The company\'s failure was due to the increase in costs.」名詞化（failure, increase）讓句子從「誰做了什麼」變成「什麼事情發生了」，更適合學術和正式場合。', examples: 'discover→discovery / improve→improvement / decide→decision / important→importance' },
      exercises: [
        { type: 'fill', question: 'The _____ (develop) of new technology has transformed the industry.', hint: '將動詞 develop 名詞化。', answer: 'development', explanation: 'develop → development。The development of new technology...' },
        { type: 'fill', question: 'They reached an _____ (agree) after long negotiations.', hint: '將動詞 agree 名詞化，搭配 reach an ___。', answer: 'agreement', explanation: 'agree → agreement。reached an agreement = 達成協議。' }
      ],
      summary: ['動詞名詞化字尾：-tion, -ment, -ance, -ence, -al, -ure', '形容詞名詞化字尾：-ness, -ity, -ence, -ance', '名詞化使語氣更客觀、正式、精簡', '搭配動詞：make a decision / reach an agreement / carry out an investigation', '學術寫作大量使用名詞化'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'The _____ (important) of education cannot be ignored.', hint: '形容詞 important 的名詞形式。', answer: 'importance', explanation: 'important → importance。The importance of education...' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '改寫為名詞化：The scientists investigated the cause of the disease. → The scientists carried out an _____ _____ the cause of the disease.', hint: 'investigate → investigation，搭配 of/into。', answer: 'investigation into/of', explanation: 'carried out an investigation into/of the cause...' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '將整句名詞化改寫：People are increasingly aware that the environment is being destroyed. → The _____ _____ of environmental _____ has grown considerably.', hint: 'aware→awareness / destroy→destruction + increasing 修飾 awareness。', answer: 'increasing awareness, destruction', explanation: 'The increasing awareness of environmental destruction has grown considerably.' }
      ]
    },

    'c2-3': {
      id: 'c2-3',
      level: 'c2',
      unitNumber: 3,
      title: '[C2] 複雜時態綜合應用',
      titleEn: 'Complex Tense Integration — Narrative & Academic Use',
      description: '精通 12 種英語時態在敘事文和學術文中的靈活選擇與切換，理解時態的細微語義差異。',
      rules: [
        { title: '規則一：敘事時態切換', desc: '在故事敘述中，過去簡單式推進情節、過去進行式設定背景、過去完成式回溯先前事件。三者交替使用。', pattern: 'The sun was shining (背景). Mary had been waiting (更早). Suddenly, a car stopped (情節推進).' },
        { title: '規則二：學術時態選擇', desc: '現在簡單式陳述事實/理論，現在完成式引用研究成果，過去簡單式描述具體實驗過程。', pattern: '事實：Water boils at 100°C. / 文獻：Research has shown that... / 實驗：The participants completed a survey.' },
        { title: '規則三：未來時態的細微差別', desc: 'will（預測/決定）、be going to（計畫/證據推斷）、present continuous（個人安排）、will be doing（預期進行）。', pattern: 'It will rain. (預測) / It\'s going to rain. (看到烏雲) / I\'m meeting her at 6. (已安排) / I\'ll be working. (預期)' },
        { title: '規則四：時態一致性與例外', desc: '轉述句中時態回推是規則，但永恆真理、即時相關和最高級句型可保持原時態。', pattern: '她說地球是圓的：She said the Earth is round. (永恆真理→不回推) / He said he is still angry. (即時相關→不回推)' }
      ],
      examples: [
        { en: 'The detective <b>examined</b> the room. Someone <b>had clearly been</b> there before. A window <b>was</b> open and curtains <b>were blowing</b> in the wind.', zh: '偵探檢查了房間（情節）。有人顯然之前來過（回溯）。窗戶開著，窗簾在風中飄動（背景）。' },
        { en: 'Research <b>has demonstrated</b> that bilingual children <b>perform</b> better on cognitive tasks.', zh: '學術引用（完成式）+ 一般事實（現在式）。' },
        { en: '— What <b>are you doing</b> this weekend? — I<b>\'m seeing</b> the dentist on Saturday, then I<b>\'ll probably be studying</b> all Sunday.', zh: '個人安排+預期進行。' },
        { en: 'She said she <b>is</b> still working on the project. (即時相關→不時態回推)', zh: '她說她仍在做專案。（現在仍然如此→不回推）' }
      ],
      preClassGuidance: { text: '讀一段文字，觀察時態的切換：「The sun was setting. I had been walking for hours. Suddenly, I saw a light.」每個時態都有不同的敘事功能。你能辨別哪個是背景、哪個是回溯、哪個是情節推進嗎？', examples: 'was setting (背景) / had been walking (回溯) / saw (推進) / Research has shown (學術引用)' },
      exercises: [
        { type: 'fill', question: 'The researcher _____ (conduct) interviews last month. Previous studies _____ (show) similar results.', hint: '具體過去實驗用過去式。之前的研究成果用現在完成式。', answer: 'conducted, have shown', explanation: '過去式描述實驗：conducted。完成式引用文獻：have shown。' },
        { type: 'fill', question: 'When I arrived, the meeting _____ already _____ (start). People _____ (discuss) the new project.', hint: '到的時候已經開始（回溯），正在討論（當時進行中）。', answer: 'had, started, were discussing', explanation: '過去完成式回溯：had started。過去進行式描述進行中：were discussing。' }
      ],
      summary: ['敘事三層：過去簡單（推進）、過去進行（背景）、過去完成（回溯）', '學術：現在簡單（事實）、現在完成（文獻引用）、過去簡單（實驗）', '未來四分：will / be going to / 現在進行 / will be doing', '時態回推例外：永恆真理、即時相關', '時態切換是高級寫作的關鍵技巧'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Numerous studies _____ (suggest) that sleep _____ (affect) memory consolidation.', hint: '文獻引用+一般事實。', answer: 'have suggested, affects', explanation: '完成式引用：have suggested。一般事實：affects。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '完成敘事段落：It _____ (be) a cold evening. Snow _____ (fall) all day. I _____ (walk) to the station when I _____ (notice) something strange.', hint: '背景→進行式或簡單過去。持續的背景→過去完成進行式。行進中的動作→過去進行式。情節推進→過去簡單式。', answer: 'was, had been falling, was walking, noticed', explanation: 'was（背景設定）。had been falling（持續到那時的動作）。was walking（行進中）。noticed（情節推進）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '修正時態選擇：(A) She told me the Earth was round. → 需要改嗎？ (B) I\'m meeting Tom tomorrow — we arranged it yesterday. → 用過去式還是現在進行式描述明天？ (C) By next year, I study here for 5 years. → 哪裡有錯？', hint: '(A) 永恆真理 (B) 已安排的未來 (C) by + 時間點要用什麼完成式？', answer: '(A) 可接受，但 She told me the Earth is round 更佳（永恆真理不回推）。(B) 現在進行式正確（已安排的計畫）。(C) By next year, I will have been studying here for 5 years.（未來完成進行式）', explanation: '(A) 永恆真理可不回推。(B) 已安排用現在進行式。(C) by+未來時間→will have been studying（5年的持續→完成進行式）。' }
      ]
    },

    'c2-4': {
      id: 'c2-4',
      level: 'c2',
      unitNumber: 4,
      title: '[C2] 模糊語言與語氣緩和',
      titleEn: 'Hedging & Vague Language — Academic Precision',
      description: '精通學術寫作和正式場合中的語氣緩和（hedging）技巧，以及口語中模糊語言的自然運用。',
      rules: [
        { title: '規則一：學術 Hedging 動詞', desc: '用 suggest, indicate, appear, seem, tend to 等代替直接斷言，避免過度自信。', pattern: '直接：This proves that... → Hedging：This suggests/indicates that... / The data appears to support...' },
        { title: '規則二：Hedging 副詞與形容詞', desc: '加入 probably, possibly, perhaps, likely, arguably, somewhat, relatively 等來緩和語氣。', pattern: 'This is wrong. → This is arguably/somewhat inaccurate. / This probably/possibly explains...' },
        { title: '規則三：Hedging 情態動詞', desc: '用 may, might, could, would 來表達可能性而非確定性。', pattern: 'This is caused by X. → This may/might/could be caused by X. / It would appear that...' },
        { title: '規則四：口語模糊語言', desc: '使用 sort of, kind of, or something, about, like, thing, stuff 等讓口語更自然（避免聽起來太精確或僵硬）。', pattern: 'I need about 20 minutes or so. / It was kind of interesting. / I bought some food and stuff.' }
      ],
      examples: [
        { en: '直接：Pollution <b>causes</b> health problems. → Hedging：Pollution <b>may contribute to</b> health problems.', zh: '從「導致」緩和為「可能促成」。' },
        { en: 'The results <b>suggest that</b> there <b>may be</b> a correlation between diet and mood.', zh: '結果「顯示」「可能有」相關性（雙重緩和）。' },
        { en: '<b>It could be argued</b> that education is the most important factor.', zh: '可以說教育是最重要的因素。（It could be argued that...）' },
        { en: 'The experiment <b>appears to indicate</b> that temperature <b>tends to</b> affect growth rates.', zh: '三重緩和：appears to, indicate, tends to。' },
        { en: '口語：I was <b>kind of</b> tired, so I left <b>around</b> 9 <b>or so</b>.', zh: '口語模糊語言：有點、大約、左右。' },
        { en: '口語：She\'s into music and <b>that sort of thing</b>.', zh: '她喜歡音樂之類的東西。' }
      ],
      preClassGuidance: { text: '在學術寫作中，為什麼不能寫 "This proves that X causes Y"？因為科學結論很少是 100% 確定的。觀察改寫版：「This suggests that X may contribute to Y.」在幾個地方進行了緩和？（suggest + may + contribute to = 三重緩和）', examples: 'suggests / may / tends to / appears to / could be argued / somewhat / probably' },
      exercises: [
        { type: 'fill', question: 'The data _____ (suggest) that social media _____ (may / have) negative effects on teenagers.', hint: '學術寫作中用 suggest 和 may 來緩和語氣。', answer: 'suggests, may have', explanation: 'The data suggests that social media may have negative effects...（雙重緩和）' },
        { type: 'fill', question: 'I was _____ _____ (有點) nervous before the presentation.', hint: '口語中的模糊語言：kind of / sort of = 有點。', answer: 'kind of / sort of', explanation: '"kind of" 或 "sort of" 在口語中表示「有點」。' }
      ],
      summary: ['動詞 hedging：suggest, indicate, appear, seem, tend to', '副詞 hedging：probably, possibly, perhaps, somewhat, arguably', '情態 hedging：may, might, could, would', '口語模糊語言：kind of, about, or so, stuff, and things', '學術寫作通常需要多重緩和'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '改寫為 hedging：Exercise improves mental health. → Exercise _____ _____ mental health.', hint: '用 may/might + improve 或其他緩和動詞。', answer: 'may improve / may contribute to improving', explanation: 'Exercise may improve mental health.（加入 may 緩和）' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '加入適當的 hedging：_____, this study _____ that increased screen time _____ be linked to sleep disorders.', hint: '句首緩和（Arguably/Perhaps）+ 動詞緩和（suggests/indicates）+ 情態動詞（may/could）。', answer: 'Arguably/Perhaps, suggests/indicates, may/could', explanation: '三重緩和結構：Arguably, this study suggests that increased screen time may be linked to sleep disorders.' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '將強烈主張改寫為學術語氣（至少使用三層 hedging）：Social media destroys teenagers\' self-esteem. → _____', hint: '改 destroys 為可能的影響，加入 suggest/may/tend to/to some extent 等。', answer: 'Research suggests that social media may, to some extent, negatively affect teenagers\' self-esteem. (或類似多重緩和表達)', explanation: '三重+緩和：suggests（動詞）+ may（情態）+ to some extent（程度副詞）+ negatively affect（取代 destroy，語氣更中性）。' }
      ]
    },

    'c2-5': {
      id: 'c2-5',
      level: 'c2',
      unitNumber: 5,
      title: '[C2] 語篇銜接與連貫',
      titleEn: 'Cohesion & Coherence — Advanced Text Organization',
      description: '精通語篇層面的銜接手段，包括照應、替代、省略、詞彙銜接和主題-評論結構，使文章邏輯流暢。',
      rules: [
        { title: '規則一：照應（Reference）', desc: '使用代名詞（it, this, that, these, such, the former, the latter）指代前面提到的概念，保持連貫。', pattern: 'The company launched a new product. This was met with great enthusiasm. / Two options exist: the former is cheaper, the latter is safer.' },
        { title: '規則二：詞彙銜接', desc: '使用同義詞、上義詞、下義詞和概括名詞來避免重複同一個詞，同時保持語意連貫。', pattern: 'car → vehicle → transportation (上義) / fruit → apple, banana (下義) / The problem → This issue → The challenge' },
        { title: '規則三：主題-評論結構（Theme-Rheme）', desc: '每個句子的開頭（主題/Theme）應連接前句的已知資訊，新資訊放在句尾（評論/Rheme），形成自然的資訊流。', pattern: '已知→新：The study examined 100 participants. These participants were divided into two groups. Each group received different treatment.' },
        { title: '規則四：邏輯連接詞的精確使用', desc: '區分相似連接詞的細微差異：however vs. nevertheless vs. nonetheless / therefore vs. thus vs. hence / moreover vs. furthermore vs. in addition。', pattern: 'however（普通轉折）/ nevertheless（強調「儘管如此還是」）/ hence（因此，正式）/ moreover（此外，加強論點）' }
      ],
      examples: [
        { en: 'Two approaches were tested. <b>The former</b> proved more effective, while <b>the latter</b> was more cost-efficient.', zh: '兩種方法被測試了。前者更有效，而後者更省成本。' },
        { en: 'The experiment failed. <b>This unexpected result</b> led the team to reconsider their hypothesis.', zh: '實驗失敗了。這個意外結果讓團隊重新考慮假說。（概括名詞銜接）' },
        { en: 'Climate change affects biodiversity. <b>Such</b> environmental shifts have been documented across multiple continents.', zh: '氣候變遷影響生物多樣性。這種環境變化已在多個大陸被記錄。（such 照應）' },
        { en: 'The results were <b>nonetheless</b> significant, despite the small sample size.', zh: '儘管樣本量小，結果還是很顯著。（nonetheless 比 however 更強調讓步）' },
        { en: 'The data confirms the hypothesis. <b>Hence</b>, we can conclude that the treatment is effective.', zh: '數據證實了假說。因此，我們可以結論治療是有效的。（hence = 正式的因此）' }
      ],
      preClassGuidance: { text: '觀察一段好的學術文章如何「銜接」：每一句都從前一句的已知資訊開始，然後引入新資訊。這種「已知→新」的模式讓讀者自然跟上邏輯。另外，this/these/such/the former/the latter 等詞是「指回去」的橋樑。', examples: 'This result... / The former... the latter... / Such changes... / hence / nonetheless' },
      exercises: [
        { type: 'fill', question: 'Two solutions were proposed. _____ _____ is more practical, but _____ _____ offers better long-term results.', hint: '指代「前面那個」和「後面那個」。', answer: 'The former, the latter', explanation: 'The former（前者）和 the latter（後者）是正式的照應詞。' },
        { type: 'fill', question: 'The study revealed significant differences between the groups. _____ unexpected findings require further investigation.', hint: '用什麼概括名詞來指代前面的「significant differences」？', answer: 'These / Such', explanation: 'These unexpected findings 或 Such unexpected findings 指回前句的發現。' }
      ],
      summary: ['照應詞：this, that, such, the former, the latter', '詞彙銜接：同義詞、上/下義詞、概括名詞', '主題-評論結構：已知→新的資訊流', '精確連接詞：however≠nevertheless≠nonetheless / therefore≠hence≠thus', '良好的銜接讓讀者自然跟上邏輯'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'Global warming is a serious issue. _____ phenomenon affects every country.', hint: '用照應詞指代 global warming。', answer: 'This', explanation: 'This phenomenon 指代前句的 global warming。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '選詞：The sample size was small. (however / nevertheless), the results were statistically significant. — 哪個更強調「儘管這樣仍然」的讓步意味？', hint: 'however = 普通轉折。nevertheless = 更強調「不管怎樣，還是」。', answer: 'Nevertheless', explanation: 'Nevertheless 更強調讓步：「儘管如此，結果仍然顯著」比 however 更有力。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '改善以下段落的銜接：The team tested two drugs. Drug A reduced symptoms by 40%. Drug B reduced symptoms by 60%. Drug B had more side effects. Drug A was recommended. → 用照應詞和連接詞重寫。', hint: '用 the former/the latter、however、hence 等來改善。', answer: 'The team tested two drugs. The former reduced symptoms by 40%, while the latter achieved a 60% reduction. However, the latter also produced more side effects. Hence, the former was recommended as the safer option.', explanation: '使用 the former/the latter（照應）、while（對比）、however（轉折）、hence（因果）和 the safer option（概括名詞）建立清晰的邏輯鏈。' }
      ]
    },

    // C2 UNITS (6-10)
    'c2-6': {
      id: 'c2-6',
      level: 'c2',
      unitNumber: 6,
      title: '[C2] 慣用語與搭配詞',
      titleEn: 'Idioms & Collocations in Context',
      description: '精通英語慣用語和固定搭配的使用，理解其在不同語境中的含義和適用場合。',
      rules: [
        { title: '規則一：常見動詞搭配（Verb Collocations）', desc: '英語動詞有固定搭配的名詞，不能隨意替換。例如 make a decision（不是 do a decision）。', pattern: 'make: a decision, progress, a mistake, an effort / do: homework, research, damage, business / take: a break, a risk, action, responsibility' },
        { title: '規則二：形容詞搭配（Adjective Collocations）', desc: '形容詞也有固定搭配的名詞。例如 heavy rain（不是 strong rain）。', pattern: 'heavy: rain, traffic, smoker / strong: wind, opinion, coffee / deep: sleep, breath, trouble' },
        { title: '規則三：慣用語的語境運用', desc: '慣用語（idioms）的意義不能從字面意思推斷。正確理解語境和語氣才能恰當使用。', pattern: 'break the ice = 破冰/打破尷尬 / hit the nail on the head = 一針見血 / a piece of cake = 小事一樁' },
        { title: '規則四：正式與非正式慣用語的選擇', desc: '有些慣用語適合口語（kick the bucket），有些適合寫作（leave no stone unturned）。根據場合選擇。', pattern: '非正式：I\'m over the moon! (超開心) / 正式：The findings shed light on... (揭示了...)' }
      ],
      examples: [
        { en: 'We need to <b>make a decision</b> before the deadline.', zh: '我們必須在截止日之前做出決定。（make，不是 do）' },
        { en: 'There was <b>heavy traffic</b> on the highway this morning.', zh: '今早高速公路上交通擁擠。（heavy，不是 big）' },
        { en: 'The professor <b>hit the nail on the head</b> with her analysis.', zh: '教授的分析一針見血。' },
        { en: 'Breaking the ice at a party can be challenging for introverts.', zh: '在派對上破冰對內向的人來說很挑戰。' },
        { en: 'The research <b>shed light on</b> the causes of the disease.', zh: '這項研究揭示了疾病的成因。（正式慣用語）' },
        { en: 'Don\'t worry, the exam was <b>a piece of cake</b>!', zh: '別擔心，考試超簡單！（非正式慣用語）' }
      ],
      preClassGuidance: { text: '為什麼我們說 "do homework" 而不是 "make homework"？為什麼是 "heavy rain" 而不是 "strong rain"？這些都是固定搭配，沒有文法規則可以解釋，只能記住。慣用語也一樣，"break the ice" 和打破冰塊無關！', examples: 'make a decision / do research / heavy rain / break the ice / shed light on' },
      exercises: [
        { type: 'fill', question: 'The company has _____ significant _____ (取得顯著進步) in reducing emissions.', hint: '「取得進步」用什麼動詞搭配 progress？', answer: 'made, progress', explanation: 'make progress = 取得進步。made significant progress in...' },
        { type: 'fill', question: 'The new study _____ _____ _____ (揭示了) the relationship between diet and health.', hint: '正式的「揭示/闡明」慣用語。', answer: 'shed light on / sheds light on', explanation: 'shed light on = 揭示/闡明。常用於學術語境。' }
      ],
      summary: ['動詞搭配：make a decision / do research / take a break', '形容詞搭配：heavy rain / strong wind / deep sleep', '慣用語不能按字面翻譯', '正式慣用語：shed light on, leave no stone unturned', '非正式慣用語：a piece of cake, break the ice'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '選正確搭配：We need to (make / do) more research. The (strong / heavy) rain caused flooding.', hint: 'research 搭配 do。rain 搭配 heavy。', answer: 'do, heavy', explanation: 'do research（不是 make research）。heavy rain（不是 strong rain）。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '用適當的慣用語填空：After hours of awkward silence, Tom finally _____ _____ _____ by telling a joke. The detective _____ _____ _____ _____ to find the witness.', hint: '第一句：打破尷尬。第二句：不遺石漏（竭盡全力尋找）。', answer: 'broke the ice, left no stone unturned', explanation: 'broke the ice（打破尷尬）。left no stone unturned（不遺餘力）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '修正搭配錯誤：(A) She did a big mistake. (B) There is strong rain outside. (C) He made his homework. (D) The company took a decision.', hint: '每句都有一個搭配錯誤。', answer: '(A) She made a big mistake. (B) There is heavy rain outside. (C) He did his homework. (D) The company made a decision.', explanation: '(A) make a mistake（不是 do）。(B) heavy rain（不是 strong）。(C) do homework（不是 make）。(D) make a decision（不是 take，英式英語除外）。' }
      ]
    },

    'c2-7': {
      id: 'c2-7',
      level: 'c2',
      unitNumber: 7,
      title: '[C2] 修辭手法',
      titleEn: 'Rhetorical Devices — Persuasion & Style',
      description: '精通英語中的主要修辭手法，包括平行結構、三段式、反問句和對照法，提升寫作的說服力和美感。',
      rules: [
        { title: '規則一：平行結構（Parallelism）', desc: '在列舉或並列時，使用相同的文法結構。平行結構使句子更有節奏感和對稱美。', pattern: 'I came, I saw, I conquered. / She likes reading, writing, and painting. (不是 she likes reading, to write, and painting)' },
        { title: '規則二：三段式（Rule of Three / Tricolon）', desc: '用三個相似的詞組或子句表達觀點，創造強調和完整感。三是修辭中最有力的數字。', pattern: 'Life, liberty, and the pursuit of happiness. / Government of the people, by the people, for the people.' },
        { title: '規則三：反問句（Rhetorical Questions）', desc: '不期待答案的問句，用來強調觀點或引導讀者思考。', pattern: 'Isn\'t it time we took action? / Who wouldn\'t want a better future?' },
        { title: '規則四：對照法（Antithesis）', desc: '在對稱的句型中放置對立的觀念，創造對比和張力。', pattern: 'Not what your country can do for you, but what you can do for your country. / To err is human; to forgive, divine.' }
      ],
      examples: [
        { en: '"I have a dream that one day... I have a dream that... I have a dream..."', zh: '反覆（Anaphora）：重複句首詞語強調。（馬丁路德金）' },
        { en: '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields."', zh: '三段式+反覆：創造壯闘的節奏感。（邱吉爾）' },
        { en: '<b>Isn\'t it</b> about time we addressed this issue?', zh: '反問句：難道不是時候解決這個問題了嗎？' },
        { en: '"It was the best of times, <b>it was the worst of times</b>."', zh: '對照法：把最好和最壞並置。（狄更斯）' },
        { en: 'We need policies that are <b>fair, effective, and sustainable</b>.', zh: '三段式：三個形容詞創造完整感。' },
        { en: '"Ask <b>not</b> what your country can do <b>for</b> you — ask what <b>you</b> can do for your <b>country</b>."', zh: '對照法+交錯語序。（甘迺迪）' }
      ],
      preClassGuidance: { text: '為什麼演說家常常用三個詞組？因為三段式創造節奏感和完整感。為什麼用反問句？因為它讓聽者自己得出結論，比直接陳述更有說服力。', examples: 'I came, I saw, I conquered. / Isn\'t it time...? / Not X but Y. / fair, effective, and sustainable' },
      exercises: [
        { type: 'fill', question: '修正平行結構：She enjoys swimming, to run, and cycling. → She enjoys _____, _____, and _____.', hint: '三個動詞都用同一形式（V-ing）。', answer: 'swimming, running, cycling', explanation: '平行結構要求相同文法形式：swimming, running, and cycling（三個都用 V-ing）。' },
        { type: 'fill', question: '完成三段式：We need leaders who are honest, _____, and _____.', hint: '用兩個正面形容詞完成三段式。', answer: '(例) courageous, visionary', explanation: '三段式用三個相似的形容詞：honest, courageous, and visionary。' }
      ],
      summary: ['平行結構：列舉時使用相同文法形式', '三段式：三個元素創造節奏和完整感', '反問句：不求答案，強調觀點', '對照法：對立觀念放在對稱句型中', '修辭手法提升說服力、節奏感和美感'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '辨識修辭手法：「Who wouldn\'t want world peace?」— 這是什麼修辭手法？', hint: '這個問題不需要回答。', answer: '反問句（Rhetorical Question）', explanation: '反問句：不期待真正的回答，用來強調「大家都想要世界和平」。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '改寫為對照法：Success requires hard work, but failure is easy. → It is not _____ that leads to failure, but _____. It is not _____ that defines success, but _____.', hint: '把對立面放在 not... but... 結構中。', answer: 'effort, lack of effort / talent, hard work (或類似對比表達)', explanation: '對照法用 not... but... 結構突出對比。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '寫一段短文（2-3 句），同時使用三段式和反問句來論述環保的重要性。', hint: '三段式列舉三個環保理由/行動。反問句引導讀者思考。', answer: '(範例) Isn\'t it time we took responsibility for our planet? We must reduce waste, conserve energy, and protect biodiversity. The future of our children, our communities, and our world depends on it.', explanation: '反問句（Isn\'t it time...）引入主題。三段式（reduce, conserve, protect / children, communities, world）創造節奏和強調。' }
      ]
    },

    'c2-8': {
      id: 'c2-8',
      level: 'c2',
      unitNumber: 8,
      title: '[C2] 常見錯誤辨析',
      titleEn: 'Common Error Analysis — Near-Native Precision',
      description: '辨析母語者也常犯的文法錯誤和容易混淆的結構，達到接近母語者的精確度。',
      rules: [
        { title: '規則一：that vs. which（限定 vs. 非限定）', desc: 'that 用於限定關係子句（定義/縮小範圍），which 用於非限定關係子句（補充資訊，前有逗號）。', pattern: 'The book that I read was good. (限定：哪本書) / The book, which I read last week, was good. (非限定：補充資訊)' },
        { title: '規則二：affect vs. effect', desc: 'affect 通常是動詞（影響），effect 通常是名詞（效果）。例外：effect 也可作動詞（實現/帶來）。', pattern: 'The weather affects my mood. (V) / The effect of the drug is immediate. (N) / to effect change (V, 正式)' },
        { title: '規則三：lie vs. lay', desc: 'lie（躺，不及物 lie-lay-lain）vs. lay（放置，及物 lay-laid-laid）。lie 的過去式 lay 容易與 lay 混淆。', pattern: '躺：I lie down. / I lay down yesterday. / I have lain here. ｜ 放：Lay the book on the table. / She laid it down.' },
        { title: '規則四：fewer vs. less / farther vs. further', desc: 'fewer + 可數名詞，less + 不可數名詞。farther = 物理距離，further = 抽象/程度上的進一步。', pattern: 'fewer people (✓) / less people (✗) / less water (✓) / further research / farther away' }
      ],
      examples: [
        { en: 'The car <b>that</b> I bought is red. (限定)', zh: '我買的那輛車是紅色的。（哪一輛？→限定）' },
        { en: 'My car<b>, which</b> I bought last year<b>,</b> is red. (非限定)', zh: '我的車（我去年買的）是紅色的。（補充資訊→逗號+which）' },
        { en: 'The policy will <b>affect</b> thousands of people.', zh: '這項政策將影響數千人。（affect = 動詞「影響」）' },
        { en: 'The <b>effect</b> of the policy was immediate.', zh: '政策的效果是立即的。（effect = 名詞「效果」）' },
        { en: 'She <b>lay</b> on the bed and fell asleep. (lie 的過去式)', zh: '她躺在床上睡著了。（lie 的過去式是 lay）' },
        { en: 'Please <b>lay</b> the documents on my desk. (lay 的現在式)', zh: '請把文件放在我桌上。（lay = 放置，及物動詞）' }
      ],
      preClassGuidance: { text: '即使是母語者也常搞混 lie/lay 和 affect/effect。一個技巧：affect 是動詞（A for Action），effect 是名詞（E for End result）。lie 不帶受詞（我躺下），lay 帶受詞（我放東西下來）。', examples: 'affect (V) vs. effect (N) / lie (躺) vs. lay (放) / that vs. which / fewer vs. less' },
      exercises: [
        { type: 'fill', question: 'There are _____ (fewer / less) students in class today.', hint: 'students 是可數名詞，用哪個？', answer: 'fewer', explanation: 'fewer + 可數名詞。fewer students（不是 less students）。' },
        { type: 'fill', question: 'The noise _____ (affect / effect) my concentration.', hint: '這裡需要動詞「影響」。', answer: 'affects', explanation: 'affect 是動詞（影響）。The noise affects my concentration.' }
      ],
      summary: ['that（限定）vs. which（非限定，逗號）', 'affect（動詞：影響）vs. effect（名詞：效果）', 'lie（躺：lie-lay-lain）vs. lay（放：lay-laid-laid）', 'fewer（可數）vs. less（不可數）', 'farther（距離）vs. further（程度/抽象）'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: 'The study, _____ was published last year, has been widely cited. (that / which)', hint: '有逗號→非限定關係子句→用什麼？', answer: 'which', explanation: '有逗號的非限定關係子句用 "which"（不是 that）。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '選正確形式：She _____ (lay / laid / lain) on the sofa all afternoon yesterday. Then she _____ (lay / laid) her book on the table.', hint: '第一句：她躺著（lie 的過去式）。第二句：她放書（lay 的過去式）。', answer: 'lay, laid', explanation: '第一句：lie 的過去式是 lay（她躺著）。第二句：lay 的過去式是 laid（她放下書）。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '改正所有錯誤：The effect of social media affects less teenagers than expected. The study which was conducted last year, found that teenagers that spend less hours online performed better. Researchers layed out their findings.', hint: '找出 affect/effect、fewer/less、that/which、lie/lay 的錯誤。', answer: 'The effect of social media affects fewer teenagers than expected. The study, which was conducted last year, found that teenagers who spend fewer hours online performed better. Researchers laid out their findings.', explanation: 'less→fewer（teenagers 可數）。加逗號+which（非限定）。that→who（指人較佳）。less→fewer（hours 可數）。layed→laid（lay 的過去式是 laid）。' }
      ]
    },

    'c2-9': {
      id: 'c2-9',
      level: 'c2',
      unitNumber: 9,
      title: '[C2] 語用學與言語行為',
      titleEn: 'Pragmatics & Speech Acts — Meaning Beyond Words',
      description: '理解話語在不同語境中的隱含意義，包括間接言語行為、禮貌原則、言外之意和文化語境的影響。',
      rules: [
        { title: '規則一：直接 vs. 間接言語行為', desc: '語句的字面意義和實際意圖可能不同。「Can you pass the salt?」字面是問能力，實際是請求。間接語更禮貌。', pattern: '直接：Close the window. / 間接（禮貌）：Would you mind closing the window? / It\'s a bit cold in here. (暗示)' },
        { title: '規則二：禮貌原則', desc: '使用過去時態、情態動詞、疑問句和否定結構來增加禮貌程度。距離感 = 禮貌度。', pattern: '禮貌等級：Close it. < Can you close it? < Could you close it? < Would you mind closing it? < I was wondering if you could possibly close it.' },
        { title: '規則三：言外之意（Implicature）', desc: '說話者暗示但不直接說出的意義。聽者需要根據語境推斷真正的意思。', pattern: 'A: How was the movie? B: Well, the popcorn was good. (暗示：電影不好) / Nice weather, isn\'t it? (可能只是寒暄)' },
        { title: '規則四：文化語境差異', desc: '不同文化對直接性、禮貌程度和言外之意的理解不同。英語文化傾向使用間接表達和正面禮貌策略。', pattern: '英式：That\'s quite interesting. (可能暗示不太認同) / 美式：That\'s awesome! (通常是真心) / 亞洲：沉默 = 可能不同意' }
      ],
      examples: [
        { en: '"<b>I was wondering if</b> you <b>could possibly</b> help me with this." (非常禮貌的請求)', zh: '我在想您是否有可能幫我這個忙。（用過去式+could+possibly 層層加禮貌）' },
        { en: 'A: "How\'s the new colleague?" B: "<b>He\'s... very punctual.</b>" (言外之意：其他方面不太好)', zh: '他很...很準時。（只能說出這個優點→暗示其他堪慮）' },
        { en: '"<b>With all due respect</b>, I think there might be a better approach."', zh: '恕我直言，我認為可能有更好的方法。（正式的不同意開場白）' },
        { en: '"That\'s <b>one way</b> of looking at it." (暗示：我不同意)', zh: '那是看待它的一種方式。（實際含義：我有不同看法）' },
        { en: '"I <b>don\'t suppose</b> you could lend me your car?" (比 Can you...? 更禮貌)', zh: '我想你大概不能借我車吧？（否定疑問=更禮貌）' }
      ],
      preClassGuidance: { text: '思考一個場景：你的朋友問「Does this dress look good on me?」如果你覺得不好看，你可能不會直接說「No, it looks terrible.」你可能會說「It\'s not bad, but the blue one might suit you better.」這就是語用學——用間接方式傳達真正的意思。', examples: 'I was wondering if... / That\'s one way of looking at it. / The popcorn was good. / With all due respect...' },
      exercises: [
        { type: 'fill', question: '將直接請求改為最禮貌形式：Give me a glass of water. → I _____ _____ _____ you _____ _____ get me a glass of water.', hint: '用 was wondering if + could possibly。', answer: 'was wondering if, could possibly', explanation: 'I was wondering if you could possibly get me a glass of water.（最禮貌形式）' },
        { type: 'fill', question: 'A: How was the presentation? B: Well, the slides were very colorful. — B 的言外之意是什麼？', hint: '只評論幻燈片的顏色，沒有提到內容...', answer: '暗示簡報內容不太好，只能誇投影片的顏色。', explanation: '言外之意（implicature）：只提到顏色而不提內容，暗示內容令人失望。' }
      ],
      summary: ['間接言語行為：字面意義 ≠ 實際意圖', '禮貌等級：距離感越大越禮貌（was wondering > could > can）', '言外之意：需要從語境推斷説話者真正的意思', '否定疑問 = 更禮貌：I don\'t suppose you could...?', '不同文化對直接性和禮貌的理解不同'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '哪一句更禮貌？(A) Can you help me? (B) Could you help me? (C) I was wondering if you could help me.', hint: '禮貌程度隨間接程度增加。', answer: '(C) I was wondering if you could help me. 最禮貌', explanation: '禮貌等級：Can < Could < I was wondering if you could。越間接越禮貌。' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '解讀言外之意：老闆說 "That\'s quite an ambitious plan." — 在英式英語中，這可能暗示什麼？ (A) 他很喜歡這個計畫 (B) 他認為計畫不太現實 (C) 他完全同意', hint: '英式英語的 "quite" 和 "ambitious" 常含有保留意味。', answer: '(B) 他認為計畫不太現實', explanation: '英式英語中 "quite ambitious" 常是委婉的批評，暗示「太不切實際了」。' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '將以下直接表達改寫為三個禮貌等級（低→中→高）：「You\'re wrong.」', hint: '低禮貌：I disagree. / 中禮貌：I\'m not sure I agree. / 高禮貌：用 with all due respect 或 I see your point, but...', answer: '低：I disagree with that. / 中：I\'m not sure I entirely agree. / 高：With all due respect, I wonder if there might be another way of looking at this.', explanation: '低→直接表達不同意。中→用 not sure + entirely 緩和。高→用 with all due respect + wonder + might 三重緩和。' }
      ]
    },

    'c2-10': {
      id: 'c2-10',
      level: 'c2',
      unitNumber: 10,
      title: '[C2] 學術寫作結構',
      titleEn: 'Academic Writing Structures — Essay & Research Paper',
      description: '精通學術論文和正式寫作的結構模版，包括論點展開、段落組織、引用整合和批判性分析語言。',
      rules: [
        { title: '規則一：論點段落結構（PEEL）', desc: 'Point（論點）→ Evidence（證據）→ Explanation（解釋）→ Link（連結回主題）。每段都遵循此結構。', pattern: 'Point: Social media affects mental health. Evidence: Studies show... Explanation: This suggests... Link: Therefore, regulations are needed.' },
        { title: '規則二：引用與整合', desc: '直接引用用引號，間接引用用 according to / as X argues / X (year) found that。學術寫作以間接引用為主。', pattern: 'According to Smith (2020), social media has... / As Chen (2019) argues, the impact of... / Research by Lee (2021) suggests...' },
        { title: '規則三：批判性分析用語', desc: '使用特定詞彙和句型來評價、質疑、比較和分析他人的研究。', pattern: '支持：This is consistent with... / 質疑：However, this fails to account for... / 限制：A limitation of this study is...' },
        { title: '規則四：文章組織信號詞', desc: '使用信號詞引導讀者：To begin with, Furthermore, In contrast, In conclusion, It should be noted that...', pattern: '引言：This essay will examine... / 正文：Firstly... Furthermore... In contrast... / 結論：In conclusion, this essay has argued...' }
      ],
      examples: [
        { en: '<b>According to</b> Smith (2020), social media usage <b>has been linked to</b> increased anxiety.', zh: '根據 Smith（2020），社群媒體使用與焦慮增加有關。' },
        { en: '<b>This finding is consistent with</b> previous research by Chen (2019).', zh: '此發現與 Chen（2019）之前的研究一致。' },
        { en: '<b>However</b>, this study <b>fails to account for</b> cultural differences.', zh: '然而，此研究未能考慮文化差異。（批評用語）' },
        { en: '<b>A limitation of</b> this approach <b>is that</b> it relies on self-reported data.', zh: '此方法的限制在於它依賴自我報告的資料。' },
        { en: '<b>This essay will examine</b> the extent to which technology affects education.', zh: '本文將探討科技影響教育的程度。（典型開場白）' },
        { en: '<b>In conclusion</b>, the evidence <b>suggests that</b> a balanced approach is needed.', zh: '總結而言，證據顯示需要一個平衡的方法。' }
      ],
      preClassGuidance: { text: '學術寫作和「寫作文」的區別在於：(1) 結構化（PEEL 段落）(2) 有證據支持（引用研究）(3) 批判性分析（不只描述，還要評價）(4) 客觀語氣（hedging）。一篇好的學術文章像是在和讀者「對話」。', examples: 'This essay will examine... / According to... / This is consistent with... / A limitation is... / In conclusion...' },
      exercises: [
        { type: 'fill', question: '_____ _____ Smith (2020), regular exercise _____ _____ _____ _____ (與...有關) improved mental health.', hint: '引用研究者 + has been linked to。', answer: 'According to, has been linked to', explanation: 'According to Smith (2020), regular exercise has been linked to improved mental health.' },
        { type: 'fill', question: 'A _____ of this study _____ _____ the sample size was relatively small.', hint: '指出研究限制的固定句型。', answer: 'limitation, is that', explanation: 'A limitation of this study is that the sample size was relatively small.' }
      ],
      summary: ['PEEL 段落：Point → Evidence → Explanation → Link', '引用：According to... / As X argues... / X found that...', '批判：consistent with / fails to account for / a limitation is', '信號詞：To begin with / Furthermore / In contrast / In conclusion', '學術寫作 = 結構化 + 證據 + 批判分析 + 客觀語氣'],
      comprehensiveExercises: [
        { difficulty: 'basic', difficultyZh: '基礎', question: '完成引用句型：_____ _____ Lee (2021), bilingual education _____ (improve) academic performance.', hint: '根據...，雙語教育「改善了」學業表現。', answer: 'According to, improves / has been shown to improve', explanation: 'According to Lee (2021), bilingual education improves / has been shown to improve academic performance.' },
        { difficulty: 'advanced', difficultyZh: '進階', question: '用批判性語言評論：Smith (2020) argues that technology is harmful. 但沒有考慮到正面影響。→ While Smith (2020) argues that technology is harmful, this analysis _____ _____ _____ _____ the potential benefits of technology in education.', hint: '批評「未能考慮到」的固定用語。', answer: 'fails to account for', explanation: 'This analysis fails to account for the potential benefits of technology in education.（批判性分析用語）' },
        { difficulty: 'challenge', difficultyZh: '挑戰', question: '完成學術段落的 PEEL 結構：Point: 社群媒體影響青少年心理健康。Evidence: _____ _____ Wang (2022)... Explanation: This _____ that... Link: _____, further research is needed to...', hint: 'P 已給。E 用引用。Ex 用 suggests。L 用 Therefore/Consequently。', answer: 'According to, suggests, Therefore/Consequently', explanation: 'Point: Social media affects teens\' mental health. Evidence: According to Wang (2022), 60% of teens report anxiety linked to social media. Explanation: This suggests that excessive usage may be harmful. Link: Therefore, further research is needed.' }
      ]
    }
  }
};


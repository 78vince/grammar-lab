#!/usr/bin/env python3
"""
Export A2 grammar units from grammar-data.js to formatted HTML files.
Uses a robust approach: convert JS to JSON then parse.
"""
import json
import re
import os

DATA_FILE = '/Users/admin/Library/Mobile Documents/com~apple~CloudDocs/Documents/working-cloud/test/grammar-data.js'
OUTPUT_DIR = '/Users/admin/Library/Mobile Documents/com~apple~CloudDocs/Documents/working-cloud/test/a2-docs'

os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    js_content = f.read()

def extract_unit_block(js_text, unit_key):
    """Extract a single unit's JS object block."""
    start_pattern = f"'{unit_key}': {{"
    start_idx = js_text.find(start_pattern)
    if start_idx == -1:
        return None
    
    # Move to the opening brace
    brace_start = js_text.index('{', start_idx + len(f"'{unit_key}': ") - 1)
    
    brace_count = 0
    for i in range(brace_start, len(js_text)):
        if js_text[i] == '{':
            brace_count += 1
        elif js_text[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                return js_text[brace_start:i+1]
    return None

def js_to_json(js_block):
    """Convert JS object literal to valid JSON string."""
    text = js_block
    
    # Step 1: Replace single-quoted strings with double-quoted
    # We need to be careful about apostrophes inside strings
    result = []
    i = 0
    in_single = False
    in_double = False
    
    while i < len(text):
        ch = text[i]
        
        # Handle escape sequences
        if i > 0 and text[i-1] == '\\':
            result.append(ch)
            i += 1
            continue
        
        if ch == "'" and not in_double:
            if in_single:
                result.append('"')  # closing
                in_single = False
            else:
                result.append('"')  # opening
                in_single = True
        elif ch == '"' and not in_single:
            if in_double:
                in_double = False
            else:
                in_double = True
            result.append(ch)
        elif ch == '"' and in_single:
            # Double quote inside single-quoted string - escape it
            result.append('\\"')
        else:
            result.append(ch)
        
        i += 1
    
    text = ''.join(result)
    
    # Step 2: Fix escaped single quotes (now they're \' inside double quotes)
    text = text.replace("\\'", "'")
    
    # Step 3: Add quotes around unquoted property keys
    # Match word characters followed by colon (but not inside strings)
    text = re.sub(r'(?<!["\w])(\w+)\s*:', r'"\1":', text)
    
    # Step 4: Remove trailing commas
    text = re.sub(r',(\s*[}\]])', r'\1', text)
    
    # Step 5: Fix <b> tags that may have been mangled
    # The HTML tags inside strings should be preserved
    
    return text

def parse_unit(js_text, unit_key):
    """Parse a unit block from JS to Python dict."""
    block = extract_unit_block(js_text, unit_key)
    if not block:
        return None
    
    json_str = js_to_json(block)
    
    try:
        return json.loads(json_str)
    except json.JSONDecodeError as e:
        # Debug: save the problematic JSON
        debug_file = f'/Users/admin/Library/Mobile Documents/com~apple~CloudDocs/Documents/working-cloud/test/a2-docs/debug_{unit_key}.json'
        with open(debug_file, 'w', encoding='utf-8') as f:
            f.write(json_str)
        print(f"  JSON parse error for {unit_key}: {e}")
        print(f"  Debug file saved to: {debug_file}")
        
        # Try to extract data manually with simpler regex
        return extract_manually(block)

def extract_manually(block):
    """Fallback manual extraction using regex on the original JS block."""
    unit = {}
    
    # Simple string fields
    for field in ['id', 'level', 'title', 'titleEn', 'description']:
        m = re.search(rf"{field}:\s*'((?:[^'\\]|\\.)*)'", block)
        if m:
            unit[field] = m.group(1).replace("\\'", "'")
    
    # Number fields
    m = re.search(r'unitNumber:\s*(\d+)', block)
    if m:
        unit['unitNumber'] = int(m.group(1))
    
    # Rules
    rules = []
    rules_match = re.search(r'rules:\s*\[(.*?)\]\s*,\s*\n\s*examples:', block, re.DOTALL)
    if rules_match:
        for rm in re.finditer(r"title:\s*'((?:[^'\\]|\\.)*)',\s*desc:\s*'((?:[^'\\]|\\.)*)',\s*pattern:\s*'((?:[^'\\]|\\.)*)'", rules_match.group(1)):
            rules.append({
                'title': rm.group(1).replace("\\'", "'"),
                'desc': rm.group(2).replace("\\'", "'"),
                'pattern': rm.group(3).replace("\\'", "'")
            })
    unit['rules'] = rules
    
    # Examples
    examples = []
    ex_match = re.search(r'examples:\s*\[(.*?)\]\s*,\s*\n\s*preClassGuidance:', block, re.DOTALL)
    if ex_match:
        for em in re.finditer(r"en:\s*'((?:[^'\\]|\\.)*)',\s*zh:\s*'((?:[^'\\]|\\.)*)'", ex_match.group(1)):
            examples.append({
                'en': em.group(1).replace("\\'", "'"),
                'zh': em.group(2).replace("\\'", "'")
            })
    unit['examples'] = examples
    
    # PreClassGuidance
    pcg_match = re.search(r"preClassGuidance:\s*\{\s*text:\s*'((?:[^'\\]|\\.)*)',\s*examples:\s*'((?:[^'\\]|\\.)*)'", block)
    if pcg_match:
        unit['preClassGuidance'] = {
            'text': pcg_match.group(1).replace("\\'", "'"),
            'examples': pcg_match.group(2).replace("\\'", "'")
        }
    
    # Exercises
    exercises = []
    ex_section = re.search(r'exercises:\s*\[(.*?)\]\s*,\s*\n\s*summary:', block, re.DOTALL)
    if ex_section:
        for em in re.finditer(
            r"type:\s*'(\w+)',\s*question:\s*'((?:[^'\\]|\\.)*)',\s*hint:\s*'((?:[^'\\]|\\.)*)',\s*answer:\s*'((?:[^'\\]|\\.)*)',\s*explanation:\s*'((?:[^'\\]|\\.)*)'",
            ex_section.group(1)
        ):
            exercises.append({
                'type': em.group(1),
                'question': em.group(2).replace("\\'", "'"),
                'hint': em.group(3).replace("\\'", "'"),
                'answer': em.group(4).replace("\\'", "'"),
                'explanation': em.group(5).replace("\\'", "'")
            })
    unit['exercises'] = exercises
    
    # Summary
    summary = []
    sum_section = re.search(r'summary:\s*\[(.*?)\]\s*,\s*\n\s*comprehensiveExercises:', block, re.DOTALL)
    if sum_section:
        summary = re.findall(r"'((?:[^'\\]|\\.)*)'", sum_section.group(1))
        summary = [s.replace("\\'", "'") for s in summary]
    unit['summary'] = summary
    
    # Comprehensive Exercises
    comp_exercises = []
    comp_section = re.search(r'comprehensiveExercises:\s*\[(.*?)\]\s*$', block, re.DOTALL | re.MULTILINE)
    if not comp_section:
        comp_section = re.search(r'comprehensiveExercises:\s*\[(.*)\]\s*\n\s*\}', block, re.DOTALL)
    if comp_section:
        for cm in re.finditer(
            r"difficulty:\s*'(\w+)',\s*difficultyZh:\s*'((?:[^'\\]|\\.)*)',\s*question:\s*'((?:[^'\\]|\\.)*)',\s*hint:\s*'((?:[^'\\]|\\.)*)',\s*answer:\s*'((?:[^'\\]|\\.)*)',\s*explanation:\s*'((?:[^'\\]|\\.)*)'",
            comp_section.group(1)
        ):
            comp_exercises.append({
                'difficulty': cm.group(1),
                'difficultyZh': cm.group(2).replace("\\'", "'"),
                'question': cm.group(3).replace("\\'", "'"),
                'hint': cm.group(4).replace("\\'", "'"),
                'answer': cm.group(5).replace("\\'", "'"),
                'explanation': cm.group(6).replace("\\'", "'")
            })
    unit['comprehensiveExercises'] = comp_exercises
    
    return unit


def generate_html(unit):
    """Generate formatted HTML document."""
    title = unit.get('title', 'Untitled')
    titleEn = unit.get('titleEn', '')
    unitNum = unit.get('unitNumber', 0)
    desc = unit.get('description', '')
    
    html = f"""<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>{title}</title></head>
<body style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8;">

<h1 style="color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 10px;">{title}</h1>

<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
  <tr><td style="padding: 8px 16px; font-weight: bold; background: #e8f0fe;">英文標題</td><td style="padding: 8px 16px; background: #f0f4ff;">{titleEn}</td></tr>
  <tr><td style="padding: 8px 16px; font-weight: bold; background: #e8f0fe;">等級</td><td style="padding: 8px 16px; background: #f0f4ff;">A2 基礎 ・ 單元 {unitNum}</td></tr>
  <tr><td style="padding: 8px 16px; font-weight: bold; background: #e8f0fe;">描述</td><td style="padding: 8px 16px; background: #f0f4ff;">{desc}</td></tr>
</table>
"""

    pcg = unit.get('preClassGuidance')
    if pcg:
        html += f"""
<h2 style="color: #0d652d;">📖 課前引導 Pre-class Guidance</h2>
<p style="background: #e8f5e9; border-left: 4px solid #34a853; padding: 12px 16px;">{pcg.get('text', '')}</p>
<p style="background: #c8e6c9; padding: 8px 12px; font-family: monospace;">{pcg.get('examples', '')}</p>
"""

    html += '<h2 style="color: #1a73e8;">📝 文法規則 Grammar Rules</h2>\n'
    for rule in unit.get('rules', []):
        html += f"""<h3 style="color: #1a73e8;">{rule.get('title', '')}</h3>
<p>{rule.get('desc', '')}</p>
<p style="background: #e8f0fe; padding: 8px 12px; font-family: monospace;">{rule.get('pattern', '')}</p>
<hr>
"""

    html += '<h2 style="color: #e37400;">💡 例句 Examples</h2>\n'
    for ex in unit.get('examples', []):
        html += f"""<p style="margin: 2px 0; font-size: 15px;">▸ {ex.get('en', '')}</p>
<p style="margin: 2px 0 12px 0; color: #666; font-size: 14px;">　{ex.get('zh', '')}</p>
"""

    html += '<h2 style="color: #e37400;">✏️ 即時練習 Exercises</h2>\n'
    for idx, ex in enumerate(unit.get('exercises', []), 1):
        html += f"""<h3>練習 {idx}</h3>
<p><b>題目：</b>{ex.get('question', '')}</p>
<p><b>提示：</b>{ex.get('hint', '')}</p>
<p><b>答案：</b><span style="color: #0d652d; font-weight: bold;">{ex.get('answer', '')}</span></p>
<p><b>解析：</b>{ex.get('explanation', '')}</p>
<hr>
"""

    html += '<h2 style="color: #333;">📌 重點總結 Summary</h2>\n<ul>\n'
    for item in unit.get('summary', []):
        html += f'<li>{item}</li>\n'
    html += '</ul>\n'

    html += '<h2 style="color: #c62828;">🎯 綜合練習 Comprehensive Exercises</h2>\n'
    for idx, ex in enumerate(unit.get('comprehensiveExercises', []), 1):
        diff_label = ex.get('difficultyZh', '')
        html += f"""<h3>【{diff_label}】練習 {idx}</h3>
<p><b>題目：</b>{ex.get('question', '')}</p>
<p><b>提示：</b>{ex.get('hint', '')}</p>
<p><b>答案：</b><span style="color: #0d652d; font-weight: bold;">{ex.get('answer', '')}</span></p>
<p><b>解析：</b>{ex.get('explanation', '')}</p>
<hr>
"""

    html += '</body></html>'
    return html


# Main
print("=" * 60)
print("Extracting A2 units from grammar-data.js")
print("=" * 60)

file_list = []
for i in range(1, 11):
    unit_key = f'a2-{i}'
    print(f"\nProcessing {unit_key}...")
    
    unit = extract_manually(extract_unit_block(js_content, unit_key))
    
    if not unit or not unit.get('title'):
        print(f"  ❌ Failed to parse {unit_key}")
        continue
    
    html = generate_html(unit)
    
    clean_title = unit['title'].replace('[A2] ', '')
    for ch in '/:*?"<>|\\':
        clean_title = clean_title.replace(ch, '_')
    filename = f"A2-Unit{str(i).zfill(2)}-{clean_title}.html"
    filepath = os.path.join(OUTPUT_DIR, filename)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    
    file_list.append(filename)
    r = len(unit.get('rules', []))
    e = len(unit.get('examples', []))
    ex = len(unit.get('exercises', []))
    c = len(unit.get('comprehensiveExercises', []))
    print(f"  ✅ {filename}")
    print(f"     📝 {r} rules | 💡 {e} examples | ✏️ {ex} exercises | 🎯 {c} comprehensive")

print(f"\n{'=' * 60}")
print(f"Total: {len(file_list)} files generated in:")
print(f"  {OUTPUT_DIR}")
print(f"{'=' * 60}")
for fn in file_list:
    print(f"  📄 {fn}")

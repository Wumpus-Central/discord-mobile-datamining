// === Module 5817: MarkupSubtextRule ===

// Module 5817 (MarkupSubtextRule)
import _mod1936 from "module_1936" /* 1936 */;
import size from "module_2" /* 2 */;

const _modDef1936 = _mod1936;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: _modDef1936.defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, allowSubtext, str) {
    let tmp = null;
    if (false !== allowSubtext.allowSubtext) {
      if (null != str) {
        let tmp4;
        if ("" !== "") {
          tmp4 = null;
        }
        tmp = tmp4;
      }
      const obj = _mod1936;
      tmp4 = obj.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    let obj2;
    let parseInline;
    let trimmed;
    const obj = { content: parseInline(fn, trimmed, obj2) };
    parseInline = _mod1936.parseInline;
    obj2 = { allowSubtext: false };
    const str = arg0[1];
    _mod1936;
    trimmed = str.trim();
    const merged = Object.assign(arg2);
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
// === Module 5195: MarkupSubtextRule ===

// Module 5195 (MarkupSubtextRule)
import _mod2075 from "module_2075" /* 2075 */;
import size from "module_2" /* 2 */;

const _modDef2075 = _mod2075;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default {
  order: _modDef2075.defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, allowSubtext, str) {
    let tmp = null;
    if (false !== allowSubtext.allowSubtext) {
      if (null != str) {
        if ("" !== "") {
          let tmp4 = null;
        }
        tmp = tmp4;
      }
      tmp4 = _mod2075.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    const obj = { content: null };
    const obj3 = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj3.allowSubtext = false;
    obj.content = _mod2075.parseInline(fn, trimmed, obj3);
    return obj;
  }
};
// === Module 5076: MarkupSubtextRule ===

// Module 5076 (MarkupSubtextRule)
import _mod4301 from "module_4301" /* 4301 */;
import size from "module_2" /* 2 */;

const _modDef4301 = _mod4301;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default {
  order: _modDef4301.defaultRules.heading.order,
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
      tmp4 = _mod4301.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    let obj = { content: null };
    obj = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj.allowSubtext = false;
    obj.content = _mod4301.parseInline(fn, trimmed, obj);
    return obj;
  }
};
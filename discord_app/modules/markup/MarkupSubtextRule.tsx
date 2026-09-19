// === Module 5237: MarkupSubtextRule ===

// Module 5237 (MarkupSubtextRule)
import _mod1929 from "module_1929" /* 1929 */;
import size from "module_2" /* 2 */;

const _modDef1929 = _mod1929;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default {
  order: _modDef1929.defaultRules.heading.order,
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
      tmp4 = _mod1929.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    const obj = { content: null };
    const obj3 = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj3.allowSubtext = false;
    obj.content = _mod1929.parseInline(fn, trimmed, obj3);
    return obj;
  }
};
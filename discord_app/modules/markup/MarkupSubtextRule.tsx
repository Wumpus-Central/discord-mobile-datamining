// === Module 4979: ? ===

// Module 4979
import set from "set" /* 2 */;
import t from "t" /* 4192 */;
import tDefault from "t" /* 4192 */;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: tDefault.defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, allowSubtext, str) {
    let tmp = null;
    if (false !== allowSubtext.allowSubtext) {
      if (null != str) {
        if ("" !== str) {
          let tmp4 = null;
        }
        tmp = tmp4;
      }
      tmp4 = t.anyScopeRegex(closure_3)(arg0, allowSubtext, str);
      const obj = t;
    }
    return tmp;
  },
  parse(arg0, arg1, arg2) {
    let obj = { content: null };
    obj = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj.allowSubtext = false;
    obj[0] = t.parseInline(arg1, trimmed, obj);
    return obj;
  }
};
const result = set.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
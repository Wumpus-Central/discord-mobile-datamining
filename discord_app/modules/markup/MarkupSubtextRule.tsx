// === Module 6830: ? ===

// Module 6830
import obj132 from "obj132" /* 2 */;
import t from "t" /* 4092 */;
import tDefault from "t" /* 4092 */;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
let obj = {
  order: tDefault.defaultRules.heading.order,
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
      tmp4 = t.anyScopeRegex(closure_3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn) {
    const obj = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj.allowSubtext = false;
    obj[0] = t.parseInline(fn, trimmed, obj);
    return obj;
  }
};
const result = obj132.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
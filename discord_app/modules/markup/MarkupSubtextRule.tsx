// discord_app/modules/markup/MarkupSubtextRule.tsx
import set from "../../../_runtime/00002_set.js";
import t from "../../../_runtime/04161_t.js";
import tDefault from "../../../_runtime/04161_t.js";

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
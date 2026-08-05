// discord_app/modules/markup/MarkupSubtextRule.tsx
const re2 = /\n$/;
const re3 = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/;
let obj = {
  order: require("t").defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, arg1, str) {
    if (null != str) {
      if ("" !== str) {
        let tmp2 = null;
      }
      return tmp2;
    }
    tmp2 = require("../../../_runtime/03984_t.js") /* t */.anyScopeRegex(closure_3)(arg0, arg1, str);
  },
  parse(arg0, arg1, inline) {
    const obj = { content: null };
    obj[0] = require("../../../_runtime/03984_t.js") /* t */.parseInline(arg1, arg0[1].trim(), inline);
    return obj;
  }
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default obj;
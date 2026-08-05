// discord_app/modules/markup/MarkupHeadingRule.tsx
const require = arg1;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(require("t").defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== str) {
        tmp = null;
      }
    }
    tmp = require("../../../_runtime/03984_t.js") /* t */.anyScopeRegex(/^ *(#{1,3})(?:\s+)([^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    const obj = require("../../../_runtime/03984_t.js") /* t */;
  }
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
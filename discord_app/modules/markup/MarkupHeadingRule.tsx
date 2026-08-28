// discord_app/modules/markup/MarkupHeadingRule.tsx
import t from "../../../_runtime/04161_t.js";
import tDefault from "../../../_runtime/04161_t.js";

require = arg1;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(tDefault.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== str) {
        tmp = null;
      }
    }
    tmp = t.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    const obj = t;
  }
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
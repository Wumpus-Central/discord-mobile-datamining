// === Module 6828: match ===

// Module 6828 (match)
import t from "t" /* 4092 */;
import tDefault from "t" /* 4092 */;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(tDefault.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = t.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const result = require("obj132").fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
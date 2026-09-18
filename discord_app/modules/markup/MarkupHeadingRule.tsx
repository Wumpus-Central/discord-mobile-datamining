// === Module 5193: MarkupHeadingRule ===

// Module 5193 (MarkupHeadingRule)
import _mod2075 from "module_2075" /* 2075 */;

const _modDef2075 = _mod2075;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef2075.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod2075.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
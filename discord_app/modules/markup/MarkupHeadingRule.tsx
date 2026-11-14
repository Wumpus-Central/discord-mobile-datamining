// === Module 16270: MarkupHeadingRule ===

// Module 16270 (MarkupHeadingRule)
import _mod2070 from "module_2070" /* 2070 */;

const _modDef2070 = _mod2070;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef2070.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod2070.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
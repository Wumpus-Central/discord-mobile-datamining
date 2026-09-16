// === Module 5109: MarkupHeadingRule ===

// Module 5109 (MarkupHeadingRule)
import _mod4334 from "module_4334" /* 4334 */;

const _modDef4334 = _mod4334;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef4334.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod4334.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
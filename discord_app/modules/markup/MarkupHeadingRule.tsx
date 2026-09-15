// === Module 5108: MarkupHeadingRule ===

// Module 5108 (MarkupHeadingRule)
import _mod4336 from "module_4336" /* 4336 */;

const _modDef4336 = _mod4336;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef4336.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod4336.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
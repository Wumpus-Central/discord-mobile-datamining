// === Module 5331: MarkupHeadingRule ===

// Module 5331 (MarkupHeadingRule)
import _mod1930 from "module_1930" /* 1930 */;

const _modDef1930 = _mod1930;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef1930.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod1930.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
// === Module 15012: MarkupHeadingRule ===

// Module 15012 (MarkupHeadingRule)
import _mod1951 from "module_1951" /* 1951 */;

const _modDef1951 = _mod1951;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef1951.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod1951.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
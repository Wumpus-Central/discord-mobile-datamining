// === Module 13980: MarkupHeadingRule ===

// Module 13980 (MarkupHeadingRule)
import _mod1949 from "module_1949" /* 1949 */;

const _modDef1949 = _mod1949;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef1949.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod1949.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
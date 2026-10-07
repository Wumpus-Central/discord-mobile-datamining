// === Module 5815: MarkupHeadingRule ===

// Module 5815 (MarkupHeadingRule)
import _mod1936 from "module_1936" /* 1936 */;

const _modDef1936 = _mod1936;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef1936.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod1936.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
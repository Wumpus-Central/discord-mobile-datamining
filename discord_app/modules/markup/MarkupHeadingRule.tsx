// === Module 5038: MarkupHeadingRule ===

// Module 5038 (MarkupHeadingRule)
import _mod4270 from "module_4270" /* 4270 */;

const _modDef4270 = _mod4270;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef4270.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod4270.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
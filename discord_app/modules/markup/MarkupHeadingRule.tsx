// === Module 5815: MarkupHeadingRule ===

// Module 5815 (MarkupHeadingRule)
import _mod1936 from "module_1936" /* 1936 */;
import size from "module_2" /* 2 */;

const _modDef1936 = _mod1936;

const re2 = /\n$/;
let obj = {
  requiredFirstCharacters: [" ", "#"],
  match(arg0, allowHeading, str) {
    let tmp = null;
    if (allowHeading.allowHeading) {
      if (null != str) {
        if ("" !== "") {
          tmp = null;
        }
      }
      const obj = _mod1936;
      tmp = obj.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
    }
    return tmp;
  }
};
const merged = Object.assign(_modDef1936.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;
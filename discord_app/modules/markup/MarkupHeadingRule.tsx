// discord_app/modules/markup/MarkupHeadingRule.tsx
import _mod4257 from "../../../_runtime/metro/04257__.js";

const _modDef4257 = _mod4257;

require = fn;
const re2 = /\n$/;
let obj = {};
const merged = Object.assign(_modDef4257.defaultRules.heading);
obj.requiredFirstCharacters = [" ", "#"];
obj.match = function match(arg0, allowHeading, str) {
  let tmp = null;
  if (allowHeading.allowHeading) {
    if (null != str) {
      if ("" !== "") {
        tmp = null;
      }
    }
    tmp = _mod4257.anyScopeRegex(/^ *(#{1,3})(?:\s+)((?!\s*#{1,3}\s)[^\n]+?)#*\s*(?:\n|$)/)(arg0, allowHeading, str);
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;

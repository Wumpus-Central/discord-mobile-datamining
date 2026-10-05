// discord_app/modules/markup/MarkupHeadingRule.tsx
import _mod1936 from "../../../_runtime/metro/01936__.js";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const merged = Object.assign(_modDef1936.defaultRules.heading);
const result = size.fileFinishedImporting("modules/markup/MarkupHeadingRule.tsx");

export default obj;

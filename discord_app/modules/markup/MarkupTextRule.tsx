// discord_app/modules/markup/MarkupTextRule.tsx
import _modDef1936 from "../../../_runtime/metro/01936__.js";
import size from "../../../_runtime/metro/00002__.js";

const module_1936_mod = _modDef1936;

let module_1936;
const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = { match: module_1936.anyScopeRegex(tmp2) };
const merged = Object.assign(_modDef1936.defaultRules.text);
module_1936 = module_1936_mod;
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export const textMarkupPatternWithExclusions = function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp(
    "^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)",
  );
  return regExp;
};

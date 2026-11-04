// === Module 6178: MarkupTextRule ===

// Module 6178 (MarkupTextRule)
import _modDef2072 from "module_2072" /* 2072 */;

const tmp2 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
const obj = {};
const merged = Object.assign(_modDef2072.defaultRules.text);
const t = fn(2072);
obj.match = t.anyScopeRegex(tmp2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupTextRule.tsx");

export default obj;
export const textRegexp = tmp2;
export function textMarkupPatternWithExclusions(textExclusions) {
  const regExp = new RegExp("^[\\s\\S]+?(?=" + textExclusions + "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)");
  return regExp;
}
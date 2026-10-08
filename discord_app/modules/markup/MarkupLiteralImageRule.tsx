// === Module 13192: MarkupLiteralImageRule ===

// Module 13192 (MarkupLiteralImageRule)
import _modDef1948 from "module_1948" /* 1948 */;
import MarkupTypes from "MarkupTypes" /* 5396 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1948.defaultRules.image);
obj.order = _modDef1948.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
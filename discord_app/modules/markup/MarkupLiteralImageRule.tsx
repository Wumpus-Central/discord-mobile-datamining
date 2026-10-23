// === Module 11969: MarkupLiteralImageRule ===

// Module 11969 (MarkupLiteralImageRule)
import _modDef1951 from "module_1951" /* 1951 */;
import MarkupTypes from "MarkupTypes" /* 5978 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1951.defaultRules.image);
obj.order = _modDef1951.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
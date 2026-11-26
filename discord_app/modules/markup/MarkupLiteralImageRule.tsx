// === Module 14657: MarkupLiteralImageRule ===

// Module 14657 (MarkupLiteralImageRule)
import _modDef2069 from "module_2069" /* 2069 */;
import MarkupTypes from "MarkupTypes" /* 6120 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef2069.defaultRules.image);
obj.order = _modDef2069.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
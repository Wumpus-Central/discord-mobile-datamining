// === Module 9048: MarkupLiteralImageRule ===

// Module 9048 (MarkupLiteralImageRule)
import _modDef4270 from "module_4270" /* 4270 */;
import MarkupTypes from "MarkupTypes" /* 5010 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef4270.defaultRules.image);
obj.order = _modDef4270.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
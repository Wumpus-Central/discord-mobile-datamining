// === Module 12206: MarkupLiteralImageRule ===

// Module 12206 (MarkupLiteralImageRule)
import _modDef1943 from "module_1943" /* 1943 */;
import MarkupTypes from "MarkupTypes" /* 6032 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1943.defaultRules.image);
obj.order = _modDef1943.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
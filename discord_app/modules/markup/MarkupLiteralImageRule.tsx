// === Module 8679: MarkupLiteralImageRule ===

// Module 8679 (MarkupLiteralImageRule)
import _modDef1930 from "module_1930" /* 1930 */;
import MarkupTypes from "MarkupTypes" /* 5498 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1930.defaultRules.image);
obj.order = _modDef1930.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
// === Module 13335: MarkupLiteralImageRule ===

// Module 13335 (MarkupLiteralImageRule)
import _modDef1949 from "module_1949" /* 1949 */;
import MarkupTypes from "MarkupTypes" /* 5400 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1949.defaultRules.image);
obj.order = _modDef1949.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
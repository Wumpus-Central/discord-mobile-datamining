// === Module 9159: MarkupLiteralImageRule ===

// Module 9159 (MarkupLiteralImageRule)
import _modDef4334 from "module_4334" /* 4334 */;
import MarkupTypes from "MarkupTypes" /* 5081 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef4334.defaultRules.image);
obj.order = _modDef4334.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
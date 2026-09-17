// === Module 9170: MarkupLiteralImageRule ===

// Module 9170 (MarkupLiteralImageRule)
import _modDef4336 from "module_4336" /* 4336 */;
import MarkupTypes from "MarkupTypes" /* 5083 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef4336.defaultRules.image);
obj.order = _modDef4336.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
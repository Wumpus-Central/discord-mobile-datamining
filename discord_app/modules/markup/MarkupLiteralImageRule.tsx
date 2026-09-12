// === Module 9145: MarkupLiteralImageRule ===

// Module 9145 (MarkupLiteralImageRule)
import _modDef4333 from "module_4333" /* 4333 */;
import MarkupTypes from "MarkupTypes" /* 5077 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef4333.defaultRules.image);
obj.order = _modDef4333.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
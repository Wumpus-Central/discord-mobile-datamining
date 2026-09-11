// === Module 9106: MarkupLiteralImageRule ===

// Module 9106 (MarkupLiteralImageRule)
import _modDef4303 from "module_4303" /* 4303 */;
import MarkupTypes from "MarkupTypes" /* 5047 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef4303.defaultRules.image);
obj.order = _modDef4303.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
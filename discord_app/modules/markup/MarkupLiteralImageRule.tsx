// === Module 12168: MarkupLiteralImageRule ===

// Module 12168 (MarkupLiteralImageRule)
import _modDef1944 from "module_1944" /* 1944 */;
import MarkupTypes from "MarkupTypes" /* 6027 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1944.defaultRules.image);
obj.order = _modDef1944.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
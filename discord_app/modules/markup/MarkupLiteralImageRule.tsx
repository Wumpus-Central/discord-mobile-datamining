// === Module 12486: MarkupLiteralImageRule ===

// Module 12486 (MarkupLiteralImageRule)
import _modDef2072 from "module_2072" /* 2072 */;
import MarkupTypes from "MarkupTypes" /* 6152 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef2072.defaultRules.image);
obj.order = _modDef2072.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
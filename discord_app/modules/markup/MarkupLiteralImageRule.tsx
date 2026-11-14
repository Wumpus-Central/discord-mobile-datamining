// === Module 12258: MarkupLiteralImageRule ===

// Module 12258 (MarkupLiteralImageRule)
import _modDef2070 from "module_2070" /* 2070 */;
import MarkupTypes from "MarkupTypes" /* 6342 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef2070.defaultRules.image);
obj.order = _modDef2070.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
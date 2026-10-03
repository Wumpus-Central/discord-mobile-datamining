// === Module 8684: MarkupLiteralImageRule ===

// Module 8684 (MarkupLiteralImageRule)
import _modDef1936 from "module_1936" /* 1936 */;
import MarkupTypes from "MarkupTypes" /* 5785 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef1936.defaultRules.image);
obj.order = _modDef1936.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
// discord_app/modules/markup/MarkupLiteralImageRule.tsx
import _modDef4270 from "../../../_runtime/metro/04270__.js";
import MarkupTypes from "MarkupTypes.tsx";

require = fn;
const obj = {};
const merged = Object.assign(_modDef4270.defaultRules.image);
obj.order = _modDef4270.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;

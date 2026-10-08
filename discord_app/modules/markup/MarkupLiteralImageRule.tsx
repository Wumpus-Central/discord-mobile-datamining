// discord_app/modules/markup/MarkupLiteralImageRule.tsx
import _modDef1948 from "../../../_runtime/metro/01948__.js";
import MarkupTypes from "MarkupTypes.tsx";

require = fn;
const obj = {};
const merged = Object.assign(_modDef1948.defaultRules.image);
obj.order = _modDef1948.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;

// discord_app/modules/markup/MarkupLiteralImageRule.tsx
import _modDef1936 from "../../../_runtime/metro/01936__.js";
import MarkupTypes from "MarkupTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  order: _modDef1936.defaultRules.link.order - 0.5,
  requiredFirstCharacters: ["!"],
  parse(content) {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
    return obj;
  },
};
const merged = Object.assign(_modDef1936.defaultRules.image);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;

// discord_app/design/void/Form/native/FormSubLabel.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Text from "../../../components/Text/native/Text.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default function FormSubLabel(color) {
  color = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (color === undefined) {
    color = "text-subtle";
  }
  return jsx(Text.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
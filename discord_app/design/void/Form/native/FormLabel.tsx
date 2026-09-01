// discord_app/design/void/Form/native/FormLabel.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Text from "../../../components/Text/native/Text.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default function FormLabel(children) {
  let lineClamp = children.numberOfLines;
  if (lineClamp === undefined) {
    lineClamp = 0;
  }
  ({ color, style, accessible } = children);
  if (color === undefined) {
    color = "mobile-text-heading-primary";
  }
  return jsx(Text.Text, {
    variant: "heading-md/semibold",
    color,
    lineClamp,
    style,
    maxFontSizeMultiplier: 2,
    accessible,
    children: children.text,
  });
}

import { Text } from "../../../components/Text/native/Text.tsx";
// discord_app/design/void/Form/native/FormSubLabel.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FormSubLabel.tsx");

export default function FormSubLabel(color) {
  let accessible;
  let numberOfLines;
  let style;
  let text;
  color = color.color;
  ({ text, numberOfLines, style, accessible } = color);
  if (color === undefined) {
    color = "text-subtle";
  }
  return jsx(Text /* Text */.Text, { color, variant: "text-xs/normal", lineClamp, style, accessible, children });
};
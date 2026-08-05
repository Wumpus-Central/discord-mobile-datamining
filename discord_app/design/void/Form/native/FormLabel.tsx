// discord_app/design/void/Form/native/FormLabel.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default function FormLabel(children) {
  let accessible;
  let color;
  let style;
  let lineClamp = children.numberOfLines;
  if (lineClamp === undefined) {
    lineClamp = 0;
  }
  ({ color, style, accessible } = children);
  if (color === undefined) {
    color = "mobile-text-heading-primary";
  }
  return jsx(require("../../../components/Text/native/Text.tsx") /* Text */.Text, { variant: "heading-md/semibold", color, lineClamp, style, maxFontSizeMultiplier: 2, accessible, children: children.text });
};
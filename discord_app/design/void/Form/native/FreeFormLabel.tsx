// discord_app/design/void/Form/native/FreeFormLabel.tsx
import "noop";
import { jsx } from "jsxProd";
import { Text } from "../../../components/Text/native/Text.tsx";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  let children;
  let nativeID;
  let style;
  ({ children, style, nativeID } = arg0);
  return jsx(Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
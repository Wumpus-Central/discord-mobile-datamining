// === Module 8576: FreeFormLabel ===

// Module 8576 (FreeFormLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4734 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  ({ children, style, nativeID } = arg0);
  return jsx(Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
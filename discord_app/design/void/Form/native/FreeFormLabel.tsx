// === Module 7658: FreeFormLabel ===

// Module 7658 (FreeFormLabel)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4442 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  ({ children, style, nativeID } = arg0);
  return jsx(Text.Text, { style, variant: "text-sm/semibold", color: "text-muted", nativeID, children });
};
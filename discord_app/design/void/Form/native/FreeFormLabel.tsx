// === Module 7253: FreeFormLabel ===

// Module 7253 (FreeFormLabel)
import Text_Text from "Text/Text" /* 5763 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  ({ children, style, nativeID } = arg0);
  return jsx(Text_Text.Text, { style, variant: "body-sm/semibold", color: "text-muted", nativeID, children });
};
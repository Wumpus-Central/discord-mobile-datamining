// === Module 6331: TableRowTrailingText ===

// Module 6331 (TableRowTrailingText)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4739 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
// === Module 6300: TableRowTrailingText ===

// Module 6300 (TableRowTrailingText)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4734 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
// discord_app/design/components/TableRow/native/TableRowTrailingText.native.tsx
import "noop";
import { jsx } from "jsxProd";
import { Text } from "../../Text/native/Text.tsx";

const require = arg1;
const result = require("Text").fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(Text /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
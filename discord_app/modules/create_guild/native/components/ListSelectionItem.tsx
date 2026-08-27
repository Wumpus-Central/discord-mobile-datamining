// === Module 11808: ListSelectionItem ===

// Module 11808 (ListSelectionItem)
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 5551 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  ({ Icon, message, onPress } = arg0);
  return jsx(TableRowInner.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
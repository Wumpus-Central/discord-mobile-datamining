// === Module 12114: ListSelectionItem ===

// Module 12114 (ListSelectionItem)
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 5607 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  ({ Icon, message, onPress } = arg0);
  return jsx(TableRowInner.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
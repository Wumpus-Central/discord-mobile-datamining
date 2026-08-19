// === Module 11491: ListSelectionItem ===

// Module 11491 (ListSelectionItem)
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  ({ Icon, message, onPress } = arg0);
  return jsx(TableRowInner.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
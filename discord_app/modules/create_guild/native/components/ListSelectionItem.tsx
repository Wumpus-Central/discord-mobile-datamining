// discord_app/modules/create_guild/native/components/ListSelectionItem.tsx
import noopAll from "noop" /* 19 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  ({ Icon, message, onPress } = arg0);
  return jsx(TableRowInner.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
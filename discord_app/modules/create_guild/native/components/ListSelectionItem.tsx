// discord_app/modules/create_guild/native/components/ListSelectionItem.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  ({ Icon, message, onPress } = arg0);
  return jsx(TableRowInner.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
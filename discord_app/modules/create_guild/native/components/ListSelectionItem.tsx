// discord_app/modules/create_guild/native/components/ListSelectionItem.tsx
import "noop";
import { jsx } from "jsxProd";
import { TableRowInner } from "../../../../design/components/TableRow/native/TableRow.native.tsx";

const require = arg1;
const result = require("TableRowInner").fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  let Icon;
  let message;
  let onPress;
  ({ Icon, message, onPress } = arg0);
  const obj = { onPress, label: message, icon: null };
  obj[2] = <Icon size={24} />;
  return jsx(TableRowInner /* TableRowInner */.TableRow, { onPress, label: message, icon: null });
};
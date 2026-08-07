// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { UserPlaceholderRow } from "../../../shared_components/user_list/UserPlaceholderRow.tsx";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(UserPlaceholderRow, { row, height });
});
const result = require("module_9015").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
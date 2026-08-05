// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";

const memoResult = require("noop").memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(require("../../../shared_components/user_list/UserPlaceholderRow.tsx"), { row, height });
});
const result = require("module_8997").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
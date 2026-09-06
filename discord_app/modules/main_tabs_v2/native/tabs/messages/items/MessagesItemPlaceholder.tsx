// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx
import UserPlaceholderRowDefault from "../../../shared_components/user_list/UserPlaceholderRow.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx",
);

export default noop.memo(function MessagesItemPlaceholder(arg0) {
  ({ row, height } = arg0);
  return jsx(UserPlaceholderRowDefault, { row, height });
});

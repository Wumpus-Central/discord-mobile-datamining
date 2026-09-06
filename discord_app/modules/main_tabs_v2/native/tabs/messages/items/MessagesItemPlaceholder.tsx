// === Module 16040: MessagesItemPlaceholder ===

// Module 16040 (MessagesItemPlaceholder)
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9829 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default noop.memo(function MessagesItemPlaceholder(arg0) {
  ({ row, height } = arg0);
  return jsx(UserPlaceholderRowDefault, { row, height });
});
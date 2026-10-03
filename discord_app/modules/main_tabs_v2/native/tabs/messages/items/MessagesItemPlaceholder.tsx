// === Module 15963: MessagesItemPlaceholder ===

// Module 15963 (MessagesItemPlaceholder)
import c from "c" /* 576 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9490 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ row, height } = arg0);
  if (cResult[0] === height) {
    if (cResult[1] === row) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = jsx(UserPlaceholderRowDefault, { row, height });
  cResult[0] = height;
  cResult[1] = row;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((arg0) => {
  ({ row, height } = arg0);
  return jsx(UserPlaceholderRowDefault, { row, height });
}));
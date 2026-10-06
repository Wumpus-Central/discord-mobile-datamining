// === Module 16006: MessagesItemPlaceholder ===

// Module 16006 (MessagesItemPlaceholder)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9503 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let height;
  let row;
  const obj = react2;
  const cResult = obj.c(3);
  ({ row, height } = arg0);
  if (cResult[0] === height) {
    let tmp3;
    if (cResult[1] === row) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = jsx(UserPlaceholderRowDefault, { row, height });
  cResult[0] = height;
  cResult[1] = row;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((arg0) => {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(UserPlaceholderRowDefault, { row, height });
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
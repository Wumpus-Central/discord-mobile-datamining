// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import UserPlaceholderRowDefault from "../../../shared_components/user_list/UserPlaceholderRow.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
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
      }
    : (arg0) => {
        let height;
        let row;
        ({ row, height } = arg0);
        return jsx(UserPlaceholderRowDefault, { row, height });
      },
);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx",
);

export default memoResult;

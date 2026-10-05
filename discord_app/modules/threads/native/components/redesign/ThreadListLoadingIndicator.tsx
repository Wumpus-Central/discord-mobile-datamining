// discord_app/modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import MessageLoadingSpinnerDefault from "../../../../../components_native/common/MessageLoadingSpinner.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp4;
        const obj = react2;
        const cResult = obj.c(2);
        const tmp3 = closure_4();
        if (cResult[0] !== tmp3.spinner) {
          const tmp7 = jsx(MessageLoadingSpinnerDefault, { style: tmp3.spinner, animate: true });
          cResult[0] = tmp3.spinner;
          cResult[1] = tmp7;
          tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : () => jsx(MessageLoadingSpinnerDefault, { style: closure_4().spinner, animate: true }),
);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;

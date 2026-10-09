// discord_app/modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx
import c from "../../../../../../_runtime/00576_c.js";
import MessageLoadingSpinnerDefault from "../../../../../components_native/common/MessageLoadingSpinner.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_4 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ThreadListLoadingIndicator() {
        const cResult = c.c(2);
        const tmp3 = closure_4();
        if (cResult[0] !== tmp3.spinner) {
          const obj2 = { style: tmp3.spinner, animate: true };
          const tmp7 = jsx(MessageLoadingSpinnerDefault, { style: tmp3.spinner, animate: true });
          cResult[0] = tmp3.spinner;
          cResult[1] = tmp7;
          let tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : function ThreadListLoadingIndicator() {
        const tmp = closure_4();
        return jsx(MessageLoadingSpinnerDefault, { style: closure_4().spinner, animate: true });
      },
);

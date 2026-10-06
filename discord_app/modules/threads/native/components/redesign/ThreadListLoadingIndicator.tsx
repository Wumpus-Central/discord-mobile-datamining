// === Module 16919: ThreadListLoadingIndicator ===

// Module 16919 (ThreadListLoadingIndicator)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import MessageLoadingSpinnerDefault from "MessageLoadingSpinner" /* 9148 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => jsx(MessageLoadingSpinnerDefault, { style: closure_4().spinner, animate: true })));
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;
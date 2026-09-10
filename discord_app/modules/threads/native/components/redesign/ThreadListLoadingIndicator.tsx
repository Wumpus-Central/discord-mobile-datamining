// === Module 16805: ThreadListLoadingIndicator ===

// Module 16805 (ThreadListLoadingIndicator)
import MessageLoadingSpinnerDefault from "MessageLoadingSpinner" /* 9683 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4605);
let closure_3 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default noop.memo(() => {
  const tmp = closure_3();
  return jsx(MessageLoadingSpinnerDefault, { style: closure_3().spinner, animate: true });
});
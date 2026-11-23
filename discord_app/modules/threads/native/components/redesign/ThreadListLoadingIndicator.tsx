// === Module 18823: ThreadListLoadingIndicator ===

// Module 18823 (ThreadListLoadingIndicator)
import MessageLoadingSpinnerDefault from "MessageLoadingSpinner" /* 10732 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4913);
let closure_3 = createStyles.createStyles({ spinner: { width: 32, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default noop.memo(function ThreadListLoadingIndicator() {
  const tmp = closure_3();
  return jsx(MessageLoadingSpinnerDefault, { style: closure_3().spinner, animate: true });
});
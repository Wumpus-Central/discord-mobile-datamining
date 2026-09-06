// === Module 7038: RunAfterInteractionsUtils ===

// Module 7038 (RunAfterInteractionsUtils)
import _mod17 from "module_17" /* 17 */;
import Timers from "Timers" /* 4447 */;
import size from "module_2" /* 2 */;

function runAfterInteractions(preloadTimestampParser) {
  let num = MINUTE;
  if (MINUTE === undefined) {
    num = 2000;
  }
  closure_1 = InteractionManager.runAfterInteractions(() => {
    delayedCall.cancel();
    preloadTimestampParser();
  });
  const delayedCall = new Timers.DelayedCall(num, () => {
    closure_1.cancel();
    preloadTimestampParser();
  });
  delayedCall.delay();
  return {
    cancel() {
      delayedCall.cancel();
      closure_1.cancel();
    }
  };
}
const InteractionManager = _mod17.InteractionManager;
const result = size.fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };
// === Module 6548: runAfterInteractions ===

// Module 6548 (runAfterInteractions)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

function runAfterInteractions(arg0, MINUTE) {
  const _require = arg0;
  let num = MINUTE;
  if (MINUTE === undefined) {
    num = 2000;
  }
  let delayedCall;
  dependencyMap = delayedCall.runAfterInteractions(() => {
    delayedCall.cancel();
    callback();
  });
  delayedCall = new _require(4259).DelayedCall(num, () => {
    closure_1.cancel();
    callback();
  });
  delayedCall.delay();
  return {
    cancel() {
      delayedCall.cancel();
      closure_1.cancel();
    }
  };
}
const InteractionManager = get_ActivityIndicator.InteractionManager;
const result = obj132.fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };
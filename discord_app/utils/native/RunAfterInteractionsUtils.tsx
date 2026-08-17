// discord_app/utils/native/RunAfterInteractionsUtils.tsx
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { start } from "../../../discord_common/js/packages/timers/Timers.tsx";

function runAfterInteractions(arg0, MINUTE) {
  const _require = arg0;
  let num = MINUTE;
  if (MINUTE === undefined) {
    num = 2000;
  }
  dependencyMap = undefined;
  let delayedCall;
  dependencyMap = delayedCall.runAfterInteractions(() => {
    delayedCall.cancel();
    callback();
  });
  delayedCall = new _start.DelayedCall(num, () => {
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
const result = set.fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };
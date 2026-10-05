// discord_app/utils/native/RunAfterInteractionsUtils.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import size from "../../../_runtime/metro/00002__.js";

function runAfterInteractions(preloadTimestampParser) {
  let closure_0 = preloadTimestampParser;
  let num = MINUTE;
  if (MINUTE === undefined) {
    num = 2000;
  }
  let closure_1 = InteractionManager.runAfterInteractions(() => {
    delayedCall.cancel();
    closure_0();
  });
  const delayedCall = new Timers.DelayedCall(num, () => {
    closure_1.cancel();
    closure_0();
  });
  delayedCall.delay();
  return {
    cancel() {
      delayedCall.cancel();
      closure_1.cancel();
    },
  };
}
const InteractionManager = react_native.InteractionManager;
const result = size.fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };

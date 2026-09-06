// discord_app/utils/native/RunAfterInteractionsUtils.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import size from "../../../_runtime/metro/00002__.js";

function runAfterInteractions(arg0, MINUTE) {
  closure_0 = arg0;
  let num = MINUTE;
  if (MINUTE === undefined) {
    num = 2000;
  }
  closure_1 = InteractionManager.runAfterInteractions(() => {
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
const InteractionManager = _mod17.InteractionManager;
const result = size.fileFinishedImporting("utils/native/RunAfterInteractionsUtils.tsx");

export default { runAfterInteractions };
export { runAfterInteractions };

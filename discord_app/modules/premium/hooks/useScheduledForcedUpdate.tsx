// === Module 13470: useScheduledForcedUpdate ===

// Module 13470 (useScheduledForcedUpdate)
import areHookInputsEqual from "areHookInputsEqual" /* 7440 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useScheduledForcedUpdate.tsx");

export default function useScheduledForcedUpdate(delay) {
  delay = delay.delay;
  let flag = delay.disable;
  if (flag === undefined) {
    flag = false;
  }
  const forceUpdate = areHookInputsEqual.useForceUpdate();
  const items = [delay, flag, forceUpdate];
  const effect = noop.useEffect(() => {
    if (timeout > 0) {
      if (!flag) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          forceUpdate();
        }, tmp);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};
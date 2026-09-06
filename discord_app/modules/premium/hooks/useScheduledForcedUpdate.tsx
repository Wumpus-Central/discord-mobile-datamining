// discord_app/modules/premium/hooks/useScheduledForcedUpdate.tsx
import areHookInputsEqual from "../../../../_runtime/07440_areHookInputsEqual.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
}

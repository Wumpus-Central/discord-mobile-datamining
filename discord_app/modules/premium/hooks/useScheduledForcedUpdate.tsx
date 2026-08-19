// === Module 12901: useScheduledForcedUpdate ===

// Module 12901 (useScheduledForcedUpdate)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/hooks/useScheduledForcedUpdate.tsx");

export default function useScheduledForcedUpdate(delay) {
  delay = delay.delay;
  let flag = delay.disable;
  if (flag === undefined) {
    flag = false;
  }
  const forceUpdate = delay(flag[1]).useForceUpdate();
  const items = [delay, flag, forceUpdate];
  const effect = forceUpdate.useEffect(() => {
    if (timeout > 0) {
      if (!flag) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          callback();
        }, tmp);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};
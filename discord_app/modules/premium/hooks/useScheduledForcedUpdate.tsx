import noop from "noop";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/hooks/useScheduledForcedUpdate.tsx");

export default function useScheduledForcedUpdate(delay) {
  delay = delay.delay;
  let flag = delay.disable;
  if (flag === undefined) {
    flag = false;
  }
  let forceUpdate;
  forceUpdate = delay(flag[1]).useForceUpdate();
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
// === Module 16397: useVibegrationsElapsedMs ===

// Module 16397 (useVibegrationsElapsedMs)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

let closure_2 = { second: 1000, minute: 60000 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsElapsedMs.tsx");

export const useVibegrationsElapsedMs = function useVibegrationsElapsedMs(startedAt) {
  _slicedToArray = startedAt;
  let str = arg1;
  if (arg1 === undefined) {
    str = "second";
  }
  const tmp = _slicedToArray(str.useState(() => Date.now()), 2);
  closure_2 = tmp[1];
  const items = [startedAt, str];
  const effect = str.useEffect(() => {
    if (null != timeout) {
      closure_1 = tmp4;
      function tick() {
        const timestamp = Date.now();
        tick(timestamp);
        timeout = setTimeout(tick, closure_1 - ((timestamp - timeout) % closure_1 + closure_1) % closure_1);
      }
      const _Date = Date;
      let timestamp = Date.now();
      tick(timestamp);
      const _setTimeout = setTimeout;
      timeout = setTimeout(tick, tmp4 - ((timestamp - tmp) % tmp4 + tmp4) % tmp4);
      return () => clearTimeout(closure_0);
    }
  }, items);
  let bound;
  if (null != startedAt) {
    const _Math = Math;
    bound = Math.max(0, tmp[0] - startedAt);
  }
  return bound;
};
// === Module 11766: useDelayedSwapToActivityActionLeave ===

// Module 11766 (useDelayedSwapToActivityActionLeave)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx");

export const useDelayedSwapToActivityActionLeave = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  const obj = require("c");
  [tmp3, dependencyMap] = noop.useState(arg0);
  if (cResult[0] !== arg0) {
    const fn = function c() {
      if (timeout === timeout(11671).ActivityAction.LEAVE) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => dependencyMap(closure_0), 100);
        return () => clearTimeout(closure_0);
      } else {
        dependencyMap(tmp);
      }
      tmp = timeout;
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp4, tmp5);
  return tmp3;
}) : ((arg0) => {
  closure_0 = arg0;
  let tmp = _slicedToArray(noop.useState(arg0), 2);
  dependencyMap = tmp[1];
  const items = [arg0];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (timeout === timeout(11671).ActivityAction.LEAVE) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => dependencyMap(closure_0), 100);
      return () => clearTimeout(closure_0);
    } else {
      dependencyMap(tmp);
    }
    tmp = timeout;
  }, items);
  return tmp[0];
});
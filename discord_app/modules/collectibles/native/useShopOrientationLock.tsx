// === Module 16175: useShopOrientationLock ===

// Module 16175 (useShopOrientationLock)
import c from "c" /* 576 */;
import applyOrientationLock from "applyOrientationLock" /* 12987 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = ReactCompilerGating.isReactCompilerEnabled() ? (function useShopOrientationLock() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      applyOrientationLock.applyOrientationLock("PORTRAIT", true);
      return applyOrientationLock.restoreDefaultOrientationLock;
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useShopOrientationLock() {
  const effect = noop.useEffect(() => {
    applyOrientationLock.applyOrientationLock("PORTRAIT", true);
    return applyOrientationLock.restoreDefaultOrientationLock;
  }, []);
});
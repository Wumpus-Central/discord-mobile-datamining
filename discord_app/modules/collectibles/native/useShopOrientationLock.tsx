// === Module 15627: useShopOrientationLock ===

// Module 15627 (useShopOrientationLock)
import applyOrientationLock from "applyOrientationLock" /* 10962 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  const effect = noop.useEffect(() => {
    applyOrientationLock.applyOrientationLock("PORTRAIT", true);
    return applyOrientationLock.restoreDefaultOrientationLock;
  }, []);
};
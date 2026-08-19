// === Module 14950: useShopOrientationLock ===

// Module 14950 (useShopOrientationLock)
import noop from "noop" /* 19 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  const effect = React.useEffect(() => {
    callback(table[1]).applyOrientationLock("PORTRAIT", true);
    return () => {
      const result = callback(table[1]).releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
    };
  }, []);
};
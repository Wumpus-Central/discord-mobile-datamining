// discord_app/modules/collectibles/native/useShopOrientationLock.tsx
import noop from "../../../../_runtime/00019_noop.js";

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
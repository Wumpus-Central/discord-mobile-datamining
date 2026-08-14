// discord_app/modules/collectibles/native/useShopOrientationLock.tsx
import noop from "noop";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  const effect = React.useEffect(() => {
    callback(table[1]).applyOrientationLock("PORTRAIT", true);
    return () => {
      const result = callback(table[1]).releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
    };
  }, []);
};
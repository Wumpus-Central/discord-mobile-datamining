// discord_app/modules/collectibles/native/useShopOrientationLock.tsx
import applyOrientationLock from "../../device/native/applyOrientationLock.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  const effect = noop.useEffect(() => {
    applyOrientationLock.applyOrientationLock("PORTRAIT", true);
    return () => {
      const result = closure_1_0(closure_1_1[1]).releaseOrientationLock({ unlockAfterRotatingToPreviousLock: false });
    };
  }, []);
};

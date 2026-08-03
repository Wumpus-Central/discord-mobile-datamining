// === Module 14622: useShopOrientationLock ===

// Module 14622 (useShopOrientationLock)
import noop from "noop";

const require = arg1;
let c3 = 0;
const result = require("handleOrientationChange").fileFinishedImporting("modules/collectibles/native/useShopOrientationLock.tsx");

export const useShopOrientationLock = function useShopOrientationLock() {
  let closure_0 = React.useRef(false);
  const effect = React.useEffect(() => {
    if (!obj.isMetaQuest()) {
      if (0 === outer1_3) {
        tmp(tmp2[2]).lockOrientation("PORTRAIT", true);
        const tmpResult = tmp(tmp2[2]);
      }
      callback.current = true;
      outer1_3 = outer1_3 + 1;
      return () => {
        if (ref.current) {
          const diff = outer1_3 - 1;
          outer1_3 = diff;
          if (0 === diff) {
            outer1_0(outer1_1[2]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
            const obj = outer1_0(outer1_1[2]);
          }
          tmp.current = false;
        }
      };
    }
    obj = callback(outer1_1[1]);
    tmp = callback;
    tmp2 = outer1_1;
  }, []);
};
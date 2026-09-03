// === Module 15839: usePortraitOrientationOnly ===

// Module 15839 (usePortraitOrientationOnly)
import useWideAuthViewDefault from "useWideAuthView" /* 7729 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  const tmp = useWideAuthViewDefault();
  closure_0 = tmp;
  const items = [tmp];
  const effect = React.useEffect(() => {
    const isIpadOSResult = callback(closure_1_2[1]).isIpadOS();
    let tmp4 = !isIpadOSResult;
    if (!isIpadOSResult) {
      let tmpResult = tmp(tmp2[2]);
      tmp4 = !tmpResult.isMetaQuest();
    }
    if (tmp4) {
      tmp4 = !callback;
    }
    callback = tmp4;
    if (tmp4) {
      tmpResult = tmp(tmp2[4]);
      tmpResult.lockOrientation("PORTRAIT", false);
    }
    return () => {
      if (callback) {
        callback(closure_1_2[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = callback(closure_1_2[4]);
      }
    };
  }, items);
};
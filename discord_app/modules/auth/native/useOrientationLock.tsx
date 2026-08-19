// === Module 15267: usePortraitOrientationOnly ===

// Module 15267 (usePortraitOrientationOnly)
import useWideAuthViewDefault from "useWideAuthView" /* 8582 */;
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  const tmp = useWideAuthViewDefault();
  closure_0 = tmp;
  const items = [tmp];
  const effect = React.useEffect(() => {
    const isIpadOSResult = callback(dependencyMap[1]).isIpadOS();
    let tmp4 = !isIpadOSResult;
    if (!isIpadOSResult) {
      let tmpResult = tmp(dependencyMap[2]);
      tmp4 = !tmpResult.isMetaQuest();
    }
    if (tmp4) {
      tmp4 = !callback;
    }
    callback = tmp4;
    if (tmp4) {
      tmpResult = tmp(dependencyMap[4]);
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
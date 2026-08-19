// discord_app/modules/auth/native/useOrientationLock.tsx
import useWideAuthViewDefault from "useWideAuthView.tsx";
import noop from "../../../../_runtime/00019_noop.js";

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
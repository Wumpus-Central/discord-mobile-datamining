// === Module 16001: useOrientationLock ===

// Module 16001 (useOrientationLock)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import DeviceUtils from "DeviceUtils" /* 4539 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6944 */;
import DeviceOrientation from "DeviceOrientation" /* 8332 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default function usePortraitOrientationOnly() {
  const tmp = useWideAuthViewDefault();
  closure_0 = tmp;
  const items = [tmp];
  const effect = noop.useEffect(() => {
    const isIpadOSResult = DeviceUtils.isIpadOS();
    let tmp4 = !isIpadOSResult;
    if (!isIpadOSResult) {
      let tmpResult = MetaQuestUtils;
      tmp4 = !tmpResult.isMetaQuest();
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (tmp4) {
      tmpResult = DeviceOrientation;
      tmpResult.lockOrientation("PORTRAIT", false);
    }
    return () => {
      if (closure_0) {
        closure_0(dependencyMap[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = closure_0(dependencyMap[4]);
      }
    };
  }, items);
};
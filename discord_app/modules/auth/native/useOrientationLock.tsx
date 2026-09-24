// === Module 16420: useOrientationLock ===

// Module 16420 (useOrientationLock)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import DeviceUtils from "DeviceUtils" /* 4808 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7275 */;
import DeviceOrientation from "DeviceOrientation" /* 8682 */;
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
      tmp4 = !MetaQuestUtils.isMetaQuest();
      const tmpResult = MetaQuestUtils;
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (tmp4) {
      DeviceOrientation.lockOrientation("PORTRAIT", false);
      const tmpResult2 = DeviceOrientation;
    }
    return () => {
      if (closure_0) {
        closure_0(dependencyMap[4]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        const obj = closure_0(dependencyMap[4]);
      }
    };
  }, items);
};
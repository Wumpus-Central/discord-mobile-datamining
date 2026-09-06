// discord_app/modules/auth/native/useOrientationLock.tsx
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import useWideAuthViewDefault from "useWideAuthView.tsx";
import DeviceOrientation from "../../device/native/DeviceOrientation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}

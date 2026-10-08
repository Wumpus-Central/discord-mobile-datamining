// discord_app/modules/auth/native/useOrientationLock.tsx
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import useWideAuthViewDefault from "useWideAuthView.tsx";
import DeviceOrientation from "../../device/native/DeviceOrientation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function usePortraitOrientationOnly() {
      const cResult = require("c").c(3);
      const tmp2 = useWideAuthViewDefault();
      _require = tmp2;
      if (cResult[0] !== tmp2) {
        const fn = function o() {
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
              closure_0(dependencyMap[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
              const obj = closure_0(dependencyMap[6]);
            }
          };
        };
        const items = [tmp2];
        cResult[0] = tmp2;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp4 = items;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = noop.useEffect(tmp3, tmp4);
    }
  : function usePortraitOrientationOnly() {
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
            closure_0(dependencyMap[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
            const obj = closure_0(dependencyMap[6]);
          }
        };
      }, items);
    };

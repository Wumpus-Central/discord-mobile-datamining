// === Module 15923: useOrientationLock ===

// Module 15923 (useOrientationLock)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import DeviceUtils from "DeviceUtils" /* 4866 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6432 */;
import DeviceOrientation from "DeviceOrientation" /* 8008 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  let tmp4;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp2 = useWideAuthViewDefault();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function o() {
      let obj = DeviceUtils;
      let tmp4 = !obj.isIpadOS();
      obj.isIpadOS();
      if (tmp4) {
        const tmpResult = MetaQuestUtils;
        tmp4 = !tmpResult.isMetaQuest();
      }
      if (tmp4) {
        tmp4 = !closure_0;
      }
      closure_0 = tmp4;
      if (closure_0) {
        const tmpResult2 = DeviceOrientation;
        tmpResult2.lockOrientation("PORTRAIT", false);
      }
      return () => {
        if (closure_0) {
          const obj = closure_2_0(closure_2_2[6]);
          obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      };
    };
    const items = [tmp2];
    cResult[0] = tmp2;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = react.useEffect(tmp3, tmp4);
}) : (() => {
  const tmp = useWideAuthViewDefault();
  let closure_0 = tmp;
  const items = [tmp];
  const effect = react.useEffect(() => {
    let obj = DeviceUtils;
    let tmp4 = !obj.isIpadOS();
    obj.isIpadOS();
    if (tmp4) {
      const tmpResult = MetaQuestUtils;
      tmp4 = !tmpResult.isMetaQuest();
    }
    if (tmp4) {
      tmp4 = !closure_0;
    }
    closure_0 = tmp4;
    if (closure_0) {
      const tmpResult2 = DeviceOrientation;
      tmpResult2.lockOrientation("PORTRAIT", false);
    }
    return () => {
      if (closure_0) {
        const obj = closure_2_0(closure_2_2[6]);
        obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
      }
    };
  }, items);
});
const result = size.fileFinishedImporting("modules/auth/native/useOrientationLock.tsx");

export default tmp2;
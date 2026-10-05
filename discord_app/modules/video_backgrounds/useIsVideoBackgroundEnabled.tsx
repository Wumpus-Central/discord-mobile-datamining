// === Module 9661: useIsVideoBackgroundEnabled ===

// Module 9661 (useIsVideoBackgroundEnabled)
import react from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment" /* 9326 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 9662 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj3 = VirtualBackgroundsIosExperimentDefault;
  const enabled = obj3.useConfig(tmp4).enabled;
  let tmp5 = useIsVideoBackgroundSupportedDefault();
  if (tmp5) {
    const tmpResult = PlatformUtils;
    const isIOSResult = tmpResult.isIOS();
    let tmp7 = !isIOSResult;
    if (isIOSResult) {
      tmp7 = enabled;
    }
    tmp5 = tmp7;
  }
  return tmp5;
}) : ((location) => {
  const obj = VirtualBackgroundsIosExperimentDefault;
  const obj2 = { location };
  const enabled = obj.useConfig(obj2).enabled;
  let tmp2 = useIsVideoBackgroundSupportedDefault();
  if (tmp2) {
    const obj3 = PlatformUtils;
    const isIOSResult = obj3.isIOS();
    let tmp5 = !isIOSResult;
    if (isIOSResult) {
      tmp5 = enabled;
    }
    tmp2 = tmp5;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx");

export default tmp2;
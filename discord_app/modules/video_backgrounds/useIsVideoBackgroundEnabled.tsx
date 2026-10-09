// === Module 11036: useIsVideoBackgroundEnabled ===

// Module 11036 (useIsVideoBackgroundEnabled)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 11037 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVideoBackgroundEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let tmp5 = useIsVideoBackgroundSupportedDefault();
  if (tmp5) {
    const isIOSResult = PlatformUtils.isIOS();
    let enabled = !isIOSResult;
    if (isIOSResult) {
      enabled = obj3.useConfig(tmp4).enabled;
    }
    tmp5 = enabled;
    const tmpResult = PlatformUtils;
  }
  return tmp5;
}) : (function useIsVideoBackgroundEnabled(location) {
  let tmp2 = useIsVideoBackgroundSupportedDefault();
  if (tmp2) {
    const isIOSResult = PlatformUtils.isIOS();
    let enabled = !isIOSResult;
    if (isIOSResult) {
      enabled = obj.useConfig(obj2).enabled;
    }
    tmp2 = enabled;
  }
  return tmp2;
});
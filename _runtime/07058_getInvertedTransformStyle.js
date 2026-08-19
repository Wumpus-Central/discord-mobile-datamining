// === Module 7058: getInvertedTransformStyle ===

// Module 7058 (getInvertedTransformStyle)
import PlatformConfig2 from "PlatformConfig" /* 7056 */;

require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
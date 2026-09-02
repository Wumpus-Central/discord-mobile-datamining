// === Module 5879: getInvertedTransformStyle ===

// Module 5879 (getInvertedTransformStyle)
import PlatformConfig2 from "PlatformConfig" /* 5877 */;

require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
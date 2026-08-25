// === Module 5752: getInvertedTransformStyle ===

// Module 5752 (getInvertedTransformStyle)
import PlatformConfig2 from "PlatformConfig" /* 5750 */;

require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
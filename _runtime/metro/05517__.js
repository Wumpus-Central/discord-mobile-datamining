// === Module 5517: ? ===

// Module 5517
import PlatformConfig2 from "PlatformConfig" /* 5515 */;

require = arg1;
const dependencyMap = arg6;

export const getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
// === Module 5407: ? ===

// Module 5407
import PlatformConfig2 from "PlatformConfig" /* 5405 */;

require = arg1;
const dependencyMap = arg6;

export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
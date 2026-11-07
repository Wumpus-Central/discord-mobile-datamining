// === Module 5650: ? ===

// Module 5650
import PlatformConfig2 from "PlatformConfig" /* 5648 */;

require = arg1;
const dependencyMap = arg6;

export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
// === Module 5645: ? ===

// Module 5645
import PlatformConfig2 from "PlatformConfig" /* 5643 */;

require = arg1;
const dependencyMap = arg6;

export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
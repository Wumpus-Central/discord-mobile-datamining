// === Module 5822: ? ===

// Module 5822
import PlatformConfig2 from "PlatformConfig" /* 5820 */;

require = arg1;
const dependencyMap = arg6;

export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
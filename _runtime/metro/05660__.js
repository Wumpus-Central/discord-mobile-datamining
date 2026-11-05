// === Module 5660: ? ===

// Module 5660
import PlatformConfig2 from "PlatformConfig" /* 5658 */;

require = arg1;
const dependencyMap = arg6;

export function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig2.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
}
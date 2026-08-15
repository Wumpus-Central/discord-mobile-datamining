// _runtime/07058_getInvertedTransformStyle.js
import { PlatformConfig } from "07056_PlatformConfig.js";
const require = arg1;
const dependencyMap = arg6;
arg5.getInvertedTransformStyle = function getInvertedTransformStyle(horizontal) {
  const PlatformConfig = PlatformConfig.PlatformConfig;
  return horizontal ? PlatformConfig.invertedTransformStyleHorizontal : PlatformConfig.invertedTransformStyle;
};
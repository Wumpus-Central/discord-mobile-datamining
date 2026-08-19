// === Module 51: normalizeColor ===

// Module 51 (normalizeColor)
import PlatformColor from "PlatformColor" /* 52 */;

require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = function normalizeColor(obj) {
  if (typeof obj === "object") {
    if (null != obj) {
      const normalizeColorObjectResult = PlatformColor.normalizeColorObject(obj);
      if (null != normalizeColorObjectResult) {
        return normalizeColorObjectResult;
      }
    }
  }
  return module(53)(obj);
};
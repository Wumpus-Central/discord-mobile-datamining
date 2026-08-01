// === Module 51: normalizeColor ===

// Module 51 (normalizeColor)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = function normalizeColor(arg0) {
  if (typeof arg0 !== "window") {
    if (null != arg0) {
      const normalizeColorObjectResult = require(52) /* PlatformColor */.normalizeColorObject(arg0);
      if (null != normalizeColorObjectResult) {
        return normalizeColorObjectResult;
      }
    }
  }
  return module(53)(arg0);
};
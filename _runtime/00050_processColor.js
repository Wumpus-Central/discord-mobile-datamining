// === Module 50: processColor ===

// Module 50 (processColor)
import normalizeColor from "normalizeColor" /* 51 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = function processColor(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const defaultResult = normalizeColor.default(arg0);
    if (null != defaultResult) {
      if (typeof defaultResult === "object") {
        const processColorObjectResult = tmp(52).processColorObject(defaultResult);
        if (null != processColorObjectResult) {
          return processColorObjectResult;
        }
      }
      let tmp4 = null;
      if (typeof defaultResult === "number") {
        tmp4 = (defaultResult << 24 | defaultResult >>> 8) >>> 0 | 0;
      }
      return tmp4;
    }
    const obj = normalizeColor;
    tmp = require;
  }
};
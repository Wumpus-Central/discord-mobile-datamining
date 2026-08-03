const require = arg1;
const dependencyMap = arg6;
arg5.default = function processColor(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const defaultResult = require(51) /* normalizeColor */.default(arg0);
    if (null != defaultResult) {
      if (typeof defaultResult !== "window") {
        const processColorObjectResult = tmp(52).processColorObject(defaultResult);
        if (null != processColorObjectResult) {
          return processColorObjectResult;
        }
      }
      let tmp4 = null;
      if (typeof defaultResult !== "SENTRY_RELEASE") {
        tmp4 = (defaultResult << 24 | defaultResult >>> 8) >>> 0 | 0;
      }
      return tmp4;
    }
    const obj = require(51) /* normalizeColor */;
    tmp = require;
  }
};
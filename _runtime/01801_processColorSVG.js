// === Module 1801: processColorSVG ===

// Module 1801 (processColorSVG)
import _mod1665 from "module_1665" /* 1665 */;

require = arg1;
const dependencyMap = arg6;
const ERROR_MESSAGES = {
  invalidColor(arg0) {
    return "Invalid color value: " + JSON.stringify(arg0);
  }
};
function processColorSVG(color) {
  const obj = _mod1665;
  const processColorNumberResult = obj.processColorNumber(color);
  if ("none" === color) {
    return 0;
  } else if (null !== processColorNumberResult) {
    let tmp9 = 0 !== processColorNumberResult;
    if (!tmp9) {
      tmp9 = "transparent" !== color;
    }
    if (tmp9) {
      tmp9 = processColorNumberResult;
    }
    return tmp9;
  } else if ("currentColor" === color) {
    return "currentColor";
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[Reanimated] " + obj.invalidColor(color));
    throw error;
  }
}

export { ERROR_MESSAGES };
export { processColorSVG };
export (color, arg1) => {
  if (typeof color === "object") {
    if (null !== color) {
      let str2 = _mod1665.processColor(color);
    }
    return str2;
  }
  if (typeof processColorSVG === "function") {
    const obj = _mod1665;
    const processColorNumberResult = obj.processColorNumber(color);
    str2 = 0;
    if ("none" !== color) {
      if (null !== processColorNumberResult) {
        let tmp11 = 0 !== processColorNumberResult;
        if (!tmp11) {
          tmp11 = "transparent" !== color;
        }
        if (tmp11) {
          tmp11 = processColorNumberResult;
        }
        str2 = tmp11;
      } else {
        str2 = "currentColor";
        if ("currentColor" !== color) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("[Reanimated] " + obj.invalidColor(color));
          throw error;
        }
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
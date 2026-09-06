// _runtime/00050_processColor.js
import normalizeColor from "00051_normalizeColor.js";
import PlatformColor from "00052_PlatformColor.js";

require = arg1;
const dependencyMap = arg6;

export default function processColor(tintColor) {
  if (null == tintColor) {
    return tintColor;
  } else {
    const defaultResult = normalizeColor.default(tintColor);
    if (null != defaultResult) {
      if (typeof defaultResult === "object") {
        const processColorObjectResult = PlatformColor.processColorObject(defaultResult);
        if (null != processColorObjectResult) {
          return processColorObjectResult;
        }
      }
      let tmp4 = null;
      if (typeof defaultResult === "number") {
        tmp4 = (((defaultResult << 24) | (defaultResult >>> 8)) >>> 0) | 0;
      }
      return tmp4;
    }
  }
}

// _runtime/00051_normalizeColor.js
import PlatformColor from "00052_PlatformColor.js";
import hslToRgbDefault from "00053_hslToRgb.js";

require = arg1;
importDefault = arg2;
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
  return hslToRgbDefault(obj);
};
// _runtime/00051_normalizeColor.js
import { PlatformColor } from "00052_PlatformColor.js";
const require = arg1;
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
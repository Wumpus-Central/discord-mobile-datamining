// _runtime/00051_normalizeColor.js
import PlatformColor from "00052_PlatformColor.js";
import normalizeColorDefault from "00053_normalizeColor.js";

export default function normalizeColor(tintColor) {
  if (typeof tintColor === "object") {
    if (null != tintColor) {
      const normalizeColorObjectResult = PlatformColor.normalizeColorObject(tintColor);
      if (null != normalizeColorObjectResult) {
        return normalizeColorObjectResult;
      }
    }
  }
  return normalizeColorDefault(tintColor);
}

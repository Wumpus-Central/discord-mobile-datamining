// === Module 51: normalizeColor ===

// Module 51 (normalizeColor)
import PlatformColor from "PlatformColor" /* 52 */;
import normalizeColorDefault from "normalizeColor" /* 53 */;


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
};
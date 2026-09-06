// === Module 86: pickScale ===

// Module 86 (pickScale)
import PixelRatioDefault from "PixelRatio" /* 87 */;

importDefault = arg2;
const dependencyMap = arg6;

export const pickScale = function pickScale(scales, _default) {
  value = _default;
  if (_default == null) {
    value = PixelRatioDefault.get();
  }
  let num = 0;
  if (0 < scales.length) {
    while (scales[num] < value) {
      num = num + 1;
    }
    return scales[num];
  }
  return scales[scales.length - 1] || 1;
};
export function setUrlCacheBreaker(arg0) {
  global = arg0;
}
export const getUrlCacheBreaker = function getUrlCacheBreaker() {
  let str = "";
  if (null != global) {
    str = global;
  }
  return str;
};
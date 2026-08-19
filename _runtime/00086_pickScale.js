// === Module 86: pickScale ===

// Module 86 (pickScale)
import PixelRatioDefault from "PixelRatio" /* 87 */;

importDefault = arg2;
const dependencyMap = arg6;
arg5.pickScale = function pickScale(scales, _default) {
  let value = _default;
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
arg5.setUrlCacheBreaker = function setUrlCacheBreaker(arg0) {
  closure_2 = arg0;
};
arg5.getUrlCacheBreaker = function getUrlCacheBreaker() {
  let str = "";
  if (null != closure_2) {
    str = closure_2;
  }
  return str;
};
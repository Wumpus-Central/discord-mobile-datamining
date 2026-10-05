// === Module 86: pickScale ===

// Module 86 (pickScale)
import _modDef87 from "module_87" /* 87 */;


export const pickScale = function pickScale(scales, _default) {
  let value = _default;
  if (_default == null) {
    const obj = _modDef87;
    value = obj.get();
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
  let closure_1_2 = arg0;
}
export const getUrlCacheBreaker = function getUrlCacheBreaker() {
  let str = "";
  if (null != React2) {
    str = React2;
  }
  return str;
};
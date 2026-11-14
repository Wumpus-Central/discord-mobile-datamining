// === Module 5420: ? ===

// Module 5420
import c from "c" /* 5408 */;
import _mod5421 from "module_5421" /* 5421 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function getNumberProperty(numberProperty, arg1) {
  return numberProperty.numberProperty(arg1);
}

export function useRiveNumber(chapterID, instance) {
  const cResult = c.c(4);
  [tmp3, tmp4, tmp5] = _mod5421.useRiveProperty(instance, chapterID, getNumberProperty);
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const obj3 = { value: tmp3, setValue: tmp4, error: tmp5 };
  cResult[0] = tmp5;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = obj3;
  tmp6 = obj3;
}
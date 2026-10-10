// === Module 4880: ? ===

// Module 4880
import c from "c" /* 576 */;
import _mod4881 from "module_4881" /* 4881 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function getNumberProperty(numberProperty, arg1) {
  return numberProperty.numberProperty(arg1);
}

export const useRiveNumber = function useRiveNumber(arg0, arg1) {
  const cResult = c.c(4);
  [tmp3, tmp4, tmp5] = _mod4881.useRiveProperty(arg1, arg0, getNumberProperty);
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
};
// === Module 4409: ? ===

// Module 4409
import c from "c" /* 4393 */;
import _mod4406 from "module_4406" /* 4406 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function getBooleanProperty(booleanProperty, arg1) {
  return booleanProperty.booleanProperty(arg1);
}

export const useRiveBoolean = function useRiveBoolean(reducedMotion, instance) {
  let obj = c;
  const cResult = obj.c(4);
  [tmp3, tmp4, tmp5] = _slicedToArray(_mod4406.useRiveProperty(instance, reducedMotion, getBooleanProperty), 3);
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  obj = { value: tmp3, setValue: tmp4, error: tmp5 };
  cResult[0] = tmp5;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = obj;
  tmp6 = obj;
};
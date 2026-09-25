// === Module 4598: ? ===

// Module 4598
import c from "c" /* 4583 */;
import _mod4596 from "module_4596" /* 4596 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function getStringProperty(stringProperty, arg1) {
  return stringProperty.stringProperty(arg1);
}

export const useRiveString = function useRiveString(LVL, instance) {
  const cResult = c.c(4);
  [tmp3, tmp4, tmp5] = _mod4596.useRiveProperty(instance, LVL, getStringProperty);
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
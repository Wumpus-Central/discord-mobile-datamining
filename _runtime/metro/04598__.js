// _runtime/metro/04598__.js
import c from "../04583_c.js";
import _mod4596 from "04596__.js";
import _slicedToArray from "00032__.js";

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

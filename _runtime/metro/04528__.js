// _runtime/metro/04528__.js
import c from "../04512_c.js";
import _mod4525 from "04525__.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getBooleanProperty(booleanProperty, arg1) {
  return booleanProperty.booleanProperty(arg1);
}

export const useRiveBoolean = function useRiveBoolean(reducedMotion, instance) {
  const cResult = c.c(4);
  [tmp3, tmp4, tmp5] = _mod4525.useRiveProperty(instance, reducedMotion, getBooleanProperty);
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

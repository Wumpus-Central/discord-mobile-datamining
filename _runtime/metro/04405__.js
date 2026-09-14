// _runtime/metro/04405__.js
import c from "../04393_c.js";
import _mod4406 from "04406__.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getNumberProperty(numberProperty, arg1) {
  return numberProperty.numberProperty(arg1);
}

export const useRiveNumber = function useRiveNumber(AnimationState, instance) {
  const cResult = c.c(4);
  [tmp3, tmp4, tmp5] = _mod4406.useRiveProperty(instance, AnimationState, getNumberProperty);
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

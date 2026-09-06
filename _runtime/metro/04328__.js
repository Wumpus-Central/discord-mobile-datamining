// _runtime/metro/04328__.js
import c from "../04316_c.js";
import _mod4329 from "04329__.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getNumberProperty(numberProperty, arg1) {
  return numberProperty.numberProperty(arg1);
}

export const useRiveNumber = function useRiveNumber(AnimationState, instance) {
  let obj = c;
  const cResult = obj.c(4);
  [tmp3, tmp4, tmp5] = _slicedToArray(_mod4329.useRiveProperty(instance, AnimationState, getNumberProperty), 3);
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

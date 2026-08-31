// _runtime/04219_getNumberProperty.js
import c from "04207_c.js";
import useRiveProperty from "04220_useRiveProperty.js";
import closure_2 from "metro/00032__slicedToArray.js";

require = arg1;
function getNumberProperty(numberProperty) {
  return numberProperty.numberProperty(arg1);
}

export const useRiveNumber = function useRiveNumber(AnimationState, instance) {
  let obj = c;
  const cResult = obj.c(4);
  const obj2 = useRiveProperty;
  [tmp3, tmp4, tmp5] = callback(useRiveProperty.useRiveProperty(instance, AnimationState, getNumberProperty), 3);
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
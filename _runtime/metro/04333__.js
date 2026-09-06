// _runtime/metro/04333__.js
import c from "../04316_c.js";
import _mod4329 from "04329__.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getEnumProperty(enumProperty, arg1) {
  return enumProperty.enumProperty(arg1);
}

export const useRiveEnum = function useRiveEnum(FillColor, instance) {
  let obj = c;
  const cResult = obj.c(4);
  [tmp3, tmp4, tmp5] = _slicedToArray(_mod4329.useRiveProperty(instance, FillColor, getEnumProperty), 3);
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

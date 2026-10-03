// _runtime/metro/04647__.js
import c from "../00576_c.js";
import _mod4643 from "04643__.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getEnumProperty(enumProperty, arg1) {
  return enumProperty.enumProperty(arg1);
}

export const useRiveEnum = function useRiveEnum(arg0, arg1) {
  const cResult = c.c(4);
  [tmp3, tmp4, tmp5] = _mod4643.useRiveProperty(arg1, arg0, getEnumProperty);
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

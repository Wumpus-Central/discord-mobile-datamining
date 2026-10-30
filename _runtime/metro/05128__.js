// _runtime/metro/05128__.js
import c from "../05111_c.js";
import _mod5124 from "05124__.js";
import _slicedToArray from "00032__.js";

require = arg1;
function getEnumProperty(enumProperty, arg1) {
  return enumProperty.enumProperty(arg1);
}

export function useRiveEnum(device, instance) {
  const cResult = c.c(4);
  [tmp3, tmp4, tmp5] = _mod5124.useRiveProperty(instance, device, getEnumProperty);
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
}

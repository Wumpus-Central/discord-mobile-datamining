// _runtime/04333_getEnumProperty.js
import c from "04316_c.js";
import useRiveProperty from "04329_useRiveProperty.js";
import closure_2 from "metro/00032__slicedToArray.js";

require = arg1;
function getEnumProperty(enumProperty) {
  return enumProperty.enumProperty(arg1);
}

export const useRiveEnum = function useRiveEnum(FillColor, instance) {
  let obj = c;
  const cResult = obj.c(4);
  const obj2 = useRiveProperty;
  [tmp3, tmp4, tmp5] = callback(useRiveProperty.useRiveProperty(instance, FillColor, getEnumProperty), 3);
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

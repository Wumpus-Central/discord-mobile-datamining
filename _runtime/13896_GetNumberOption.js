// _runtime/13896_GetNumberOption.js
import DefaultNumberOption from "13897_DefaultNumberOption.js";

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(
  result1,
  minimumIntegerDigits,
  minimumSignificantDigits,
  arg3,
  arg4,
) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};

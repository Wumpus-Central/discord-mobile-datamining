// _runtime/13904_GetNumberOption.js
import DefaultNumberOption from "13905_DefaultNumberOption.js";

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

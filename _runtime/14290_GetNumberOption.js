// === Module 14290: GetNumberOption ===

// Module 14290 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14291 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
// === Module 14209: GetNumberOption ===

// Module 14209 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14210 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
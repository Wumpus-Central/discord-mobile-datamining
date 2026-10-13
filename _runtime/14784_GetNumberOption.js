// === Module 14784: GetNumberOption ===

// Module 14784 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14785 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
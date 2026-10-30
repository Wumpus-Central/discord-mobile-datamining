// === Module 15995: GetNumberOption ===

// Module 15995 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15996 */;

require = arg1;
const dependencyMap = arg6;

export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
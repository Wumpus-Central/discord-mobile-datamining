// === Module 15363: GetNumberOption ===

// Module 15363 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15364 */;

require = arg1;
const dependencyMap = arg6;

export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
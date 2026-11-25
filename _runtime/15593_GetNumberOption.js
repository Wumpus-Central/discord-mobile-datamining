// === Module 15593: GetNumberOption ===

// Module 15593 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15594 */;

require = arg1;
const dependencyMap = arg6;

export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
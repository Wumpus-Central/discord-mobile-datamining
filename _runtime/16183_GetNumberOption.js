// === Module 16183: GetNumberOption ===

// Module 16183 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16184 */;

require = arg1;
const dependencyMap = arg6;

export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
// === Module 16541: GetNumberOption ===

// Module 16541 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16542 */;

require = arg1;
const dependencyMap = arg6;

export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
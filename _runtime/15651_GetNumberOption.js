// === Module 15651: GetNumberOption ===

// Module 15651 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 15652 */;

require = arg1;
const dependencyMap = arg6;

export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
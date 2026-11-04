// === Module 16285: GetNumberOption ===

// Module 16285 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 16286 */;

require = arg1;
const dependencyMap = arg6;

export function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
}
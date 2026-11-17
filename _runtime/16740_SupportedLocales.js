// === Module 16740: SupportedLocales ===

// Module 16740 (SupportedLocales)
import ToNumber from "ToNumber" /* 16689 */;
import GetOption from "GetOption" /* 16696 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16723 */;

require = arg1;
const dependencyMap = arg6;

export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = ToNumber.ToObject(arg2);
    str = GetOption.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  }
}
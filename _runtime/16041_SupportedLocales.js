// === Module 16041: SupportedLocales ===

// Module 16041 (SupportedLocales)
import _mod15990 from "module_15990" /* 15990 */;
import GetOption from "GetOption" /* 15997 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16024 */;

require = arg1;
const dependencyMap = arg6;

export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15990.ToObject(arg2);
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
// === Module 16344: SupportedLocales ===

// Module 16344 (SupportedLocales)
import _mod16293 from "module_16293" /* 16293 */;
import GetOption from "GetOption" /* 16300 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16327 */;

require = arg1;
const dependencyMap = arg6;

export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod16293.ToObject(arg2);
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
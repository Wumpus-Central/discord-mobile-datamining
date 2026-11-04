// === Module 16318: SupportedLocales ===

// Module 16318 (SupportedLocales)
import _mod16267 from "module_16267" /* 16267 */;
import GetOption from "GetOption" /* 16274 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16301 */;

require = arg1;
const dependencyMap = arg6;

export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod16267.ToObject(arg2);
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
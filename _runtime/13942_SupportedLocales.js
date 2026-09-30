// === Module 13942: SupportedLocales ===

// Module 13942 (SupportedLocales)
import _mod13891 from "module_13891" /* 13891 */;
import GetOption from "GetOption" /* 13898 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 13925 */;

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod13891.ToObject(arg2);
    str = GetOption.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
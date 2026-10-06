// === Module 14037: SupportedLocales ===

// Module 14037 (SupportedLocales)
import _mod13986 from "module_13986" /* 13986 */;
import GetOption from "GetOption" /* 13993 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14020 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod13986.ToObject(arg2);
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
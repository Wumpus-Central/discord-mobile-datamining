// === Module 16229: SupportedLocales ===

// Module 16229 (SupportedLocales)
import _mod16178 from "module_16178" /* 16178 */;
import GetOption from "GetOption" /* 16185 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16212 */;

require = arg1;
const dependencyMap = arg6;

export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod16178.ToObject(arg2);
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
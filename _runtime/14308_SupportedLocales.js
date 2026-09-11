// === Module 14308: SupportedLocales ===

// Module 14308 (SupportedLocales)
import _mod14257 from "module_14257" /* 14257 */;
import GetOption from "GetOption" /* 14264 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14291 */;

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14257.ToObject(arg2);
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
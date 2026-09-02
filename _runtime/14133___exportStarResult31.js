// === Module 14133: __exportStarResult31 ===

// Module 14133 (__exportStarResult31)
import __exportStarResult32 from "__exportStarResult32" /* 14082 */;
import __exportStarResult4 from "__exportStarResult4" /* 14089 */;
import match from "match" /* 14116 */;

require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = __exportStarResult32.ToObject(arg2);
    str = __exportStarResult4.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return match.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return match.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
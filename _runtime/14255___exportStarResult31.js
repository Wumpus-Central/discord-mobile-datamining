// _runtime/14255___exportStarResult31.js
import __exportStarResult32 from "14204___exportStarResult32.js";
import __exportStarResult4 from "14211___exportStarResult4.js";
import match from "14238_match.js";

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

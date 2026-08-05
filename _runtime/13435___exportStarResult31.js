// _runtime/13435___exportStarResult31.js
import { __exportStarResult32 } from "13384___exportStarResult32.js";
import { __exportStarResult4 } from "13391___exportStarResult4.js";
import { match } from "13418_match.js";
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = __exportStarResult32 /* __exportStarResult32 */.ToObject(arg2);
    str = __exportStarResult4 /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return match /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return match /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
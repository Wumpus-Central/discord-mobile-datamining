// _runtime/13435___exportStarResult31.js
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = require("13384___exportStarResult32.js") /* __exportStarResult32 */.ToObject(arg2);
    str = require("13391___exportStarResult4.js") /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return require("13418_match.js") /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return require("13418_match.js") /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
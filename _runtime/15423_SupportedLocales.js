// _runtime/15423_SupportedLocales.js
import ToNumber from "15372_ToNumber.js";
import GetOption from "15379_GetOption.js";
import LookupSupportedLocales from "15406_LookupSupportedLocales.js";

require = arg1;
const dependencyMap = arg6;

export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = ToNumber.ToObject(arg2);
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

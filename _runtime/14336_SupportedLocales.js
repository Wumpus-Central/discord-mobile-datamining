// _runtime/14336_SupportedLocales.js
import _mod14285 from "metro/14285__.js";
import GetOption from "14292_GetOption.js";
import LookupSupportedLocales from "14319_LookupSupportedLocales.js";

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14285.ToObject(arg2);
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

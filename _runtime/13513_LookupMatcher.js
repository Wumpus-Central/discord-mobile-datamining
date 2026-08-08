// _runtime/13513_LookupMatcher.js
import { isMatched } from "13514_isMatched.js";
import { BestAvailableLocale } from "13517_BestAvailableLocale.js";
const require = arg1;
const dependencyMap = arg6;
arg5.LookupMatcher = function LookupMatcher(arg0, arg1, arg2) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(isMatched.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    const BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    while (!BestAvailableLocaleResult) {
      num = num + 1;
    }
    obj.locale = BestAvailableLocaleResult;
    if (arg1[num] !== replaced) {
      obj.extension = str.slice(replaced.length, str.length);
    }
    return obj;
  }
  obj.locale = arg2();
  return obj;
};
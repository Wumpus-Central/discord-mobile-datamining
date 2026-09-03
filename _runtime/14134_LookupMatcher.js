// === Module 14134: LookupMatcher ===

// Module 14134 (LookupMatcher)
import isMatched from "isMatched" /* 14135 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14138 */;

require = arg1;
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
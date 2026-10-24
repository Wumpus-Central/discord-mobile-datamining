// _runtime/15483_LookupMatcher.js
import _mod15484 from "metro/15484__.js";
import BestAvailableLocale from "15487_BestAvailableLocale.js";

require = arg1;
const dependencyMap = arg6;

export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15484.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
  obj.locale = fn();
  return obj;
};

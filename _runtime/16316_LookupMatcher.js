// === Module 16316: LookupMatcher ===

// Module 16316 (LookupMatcher)
import _mod16317 from "module_16317" /* 16317 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16320 */;

require = arg1;
const dependencyMap = arg6;

export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16317.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
}
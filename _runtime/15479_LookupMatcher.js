// === Module 15479: LookupMatcher ===

// Module 15479 (LookupMatcher)
import _mod15480 from "module_15480" /* 15480 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15483 */;

require = arg1;
const dependencyMap = arg6;

export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15480.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
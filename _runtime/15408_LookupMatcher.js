// === Module 15408: LookupMatcher ===

// Module 15408 (LookupMatcher)
import _mod15409 from "module_15409" /* 15409 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15412 */;

require = arg1;
const dependencyMap = arg6;

export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15409.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
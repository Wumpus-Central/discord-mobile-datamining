// === Module 15492: ? ===

// Module 15492
import _mod15482 from "module_15482" /* 15482 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15485 */;

require = arg1;
const dependencyMap = arg6;

export function LookupSupportedLocales(arg0, arg1) {
  items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15482.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
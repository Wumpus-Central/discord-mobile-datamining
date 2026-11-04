// === Module 16314: ? ===

// Module 16314
import _mod16304 from "module_16304" /* 16304 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16307 */;

require = arg1;
const dependencyMap = arg6;

export function LookupSupportedLocales(arg0, arg1) {
  items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16304.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
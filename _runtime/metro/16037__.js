// === Module 16037: ? ===

// Module 16037
import _mod16027 from "module_16027" /* 16027 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16030 */;

require = arg1;
const dependencyMap = arg6;

export function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16027.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
// === Module 15160: ? ===

// Module 15160
import _mod15150 from "module_15150" /* 15150 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15153 */;

require = arg1;
const dependencyMap = arg6;

export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15150.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
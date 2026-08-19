// === Module 13627: LookupSupportedLocales ===

// Module 13627 (LookupSupportedLocales)
import isMatched from "isMatched" /* 13617 */;
import BestAvailableLocale from "BestAvailableLocale" /* 13620 */;

require = arg1;
const dependencyMap = arg6;
arg5.LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(isMatched.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
// _runtime/metro/15635__.js
import _mod15625 from "15625__.js";
import BestAvailableLocale from "../15628_BestAvailableLocale.js";

require = arg1;
const dependencyMap = arg6;

export function LookupSupportedLocales(arg0, arg1) {
  items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15625.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}

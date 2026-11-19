// _runtime/metro/15405__.js
import _mod15395 from "15395__.js";
import BestAvailableLocale from "../15398_BestAvailableLocale.js";

require = arg1;
const dependencyMap = arg6;

export function LookupSupportedLocales(arg0, arg1) {
  items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15395.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}

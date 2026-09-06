// _runtime/metro/14283__.js
import _mod14200 from "14200__.js";
import currencies2 from "../14284_currencies.js";

require = arg1;
const dependencyMap = arg6;
function isSupportedCurrency(arr3, locale) {
  let str = locale;
  if (undefined === locale) {
    str = "en";
  }
  try {
    const obj = { style: "currency", currencyDisplay: "name", currency: arr3 };
    const memoizedNumberFormat = _mod14200.createMemoizedNumberFormat(str, obj);
    const str2 = memoizedNumberFormat.format(123);
    if (str2.substring(0, 3) !== arr3) {
      if (str3.substring(str3.length - 3) !== arr3) {
        return true;
      }
    }
    return false;
  } catch (err) {}
}

export const getSupportedCurrencies = function getSupportedCurrencies(locale) {
  const items = [];
  const currencies = currencies2.currencies;
  for (let num = 0; num < currencies.length; num = num + 1) {
    let arr3 = currencies[num];
    if (3 === arr3.length) {
      if (isSupportedCurrency(arr3, locale)) {
        let arr = items.push(arr3);
      }
    } else if (5 === arr3.length) {
      if ("~" === arr3[3]) {
        let indexOf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf;
        let index = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(arr3[2]);
        let indexOf2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf;
        let index1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(arr3[4]);
        if (index <= index1) {
          do {
            let sum = arr3.substring(0, 2) + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index];
            if (isSupportedCurrency(sum, locale)) {
              arr = items.push(sum);
            }
            index = index + 1;
          } while (index <= index1);
        }
      }
    }
  }
  return items;
};

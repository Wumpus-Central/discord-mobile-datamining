// _runtime/metro/14065__.js
import _mod13982 from "13982__.js";
import currencies2 from "../14066_currencies.js";

function isSupportedCurrency(arr3, locale) {
  let str = locale;
  if (undefined === locale) {
    str = "en";
  }
  try {
    const obj = { style: "currency", currencyDisplay: "name", currency: arr3 };
    const memoizedNumberFormat = _mod13982.createMemoizedNumberFormat(str, obj);
    const str2 = memoizedNumberFormat.format(123);
    if (str2.substring(0, 3) !== arr3) {
      if (str2.substring(str2.length - 3) !== arr3) {
        return true;
      }
    }
    return false;
  } catch (err) {}
}

export const getSupportedCurrencies = function getSupportedCurrencies(locale) {
  let num;
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
              let arr2 = items.push(sum);
            }
            index = index + 1;
          } while (index <= index1);
        }
      }
    }
  }
  return items;
};

// _runtime/16012_CurrencyDigits.js
import _mod15990 from "metro/15990__.js";

require = arg1;
const dependencyMap = arg6;

export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15990.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}

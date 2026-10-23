// _runtime/15428_CurrencyDigits.js
import _mod15406 from "metro/15406__.js";

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15406.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};

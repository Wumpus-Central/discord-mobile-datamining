// _runtime/13886_CurrencyDigits.js
import _mod13864 from "metro/13864__.js";

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13864.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};

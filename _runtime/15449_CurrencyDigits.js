// _runtime/15449_CurrencyDigits.js
import _mod15427 from "metro/15427__.js";

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15427.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};

// _runtime/14229_CurrencyDigits.js
import _mod14207 from "metro/14207__.js";

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14207.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};

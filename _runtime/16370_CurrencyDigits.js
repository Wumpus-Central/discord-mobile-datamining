// _runtime/16370_CurrencyDigits.js
import ToNumber from "16348_ToNumber.js";

require = arg1;
const dependencyMap = arg6;

export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToNumber.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}

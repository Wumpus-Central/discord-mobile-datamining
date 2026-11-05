// === Module 16315: CurrencyDigits ===

// Module 16315 (CurrencyDigits)
import _mod16293 from "module_16293" /* 16293 */;

require = arg1;
const dependencyMap = arg6;

export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod16293.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
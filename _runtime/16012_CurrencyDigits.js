// === Module 16012: CurrencyDigits ===

// Module 16012 (CurrencyDigits)
import _mod15990 from "module_15990" /* 15990 */;

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
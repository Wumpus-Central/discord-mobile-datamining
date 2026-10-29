// === Module 15972: CurrencyDigits ===

// Module 15972 (CurrencyDigits)
import _mod15950 from "module_15950" /* 15950 */;

require = arg1;
const dependencyMap = arg6;

export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15950.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
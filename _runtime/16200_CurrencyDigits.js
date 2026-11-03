// === Module 16200: CurrencyDigits ===

// Module 16200 (CurrencyDigits)
import _mod16178 from "module_16178" /* 16178 */;

require = arg1;
const dependencyMap = arg6;

export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod16178.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
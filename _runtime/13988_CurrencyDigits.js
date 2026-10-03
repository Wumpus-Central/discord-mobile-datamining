// === Module 13988: CurrencyDigits ===

// Module 13988 (CurrencyDigits)
import _mod13966 from "module_13966" /* 13966 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13966.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
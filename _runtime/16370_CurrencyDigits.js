// === Module 16370: CurrencyDigits ===

// Module 16370 (CurrencyDigits)
import ToNumber from "ToNumber" /* 16348 */;

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
// === Module 14008: CurrencyDigits ===

// Module 14008 (CurrencyDigits)
import _mod13986 from "module_13986" /* 13986 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13986.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
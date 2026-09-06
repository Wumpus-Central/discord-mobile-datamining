// === Module 14226: __exportStarResult15 ===

// Module 14226 (__exportStarResult15)
import __exportStarResult32 from "__exportStarResult32" /* 14204 */;

require = arg1;
const dependencyMap = arg6;
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (__exportStarResult32.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
// === Module 14115: __exportStarResult23 ===

// Module 14115 (__exportStarResult23)
import CanonicalizeLocaleList from "CanonicalizeLocaleList" /* 14079 */;
import __exportStarResult2 from "__exportStarResult2" /* 14081 */;
import getMultiInternalSlots from "getMultiInternalSlots" /* 14084 */;
import __exportStarResult4 from "__exportStarResult4" /* 14089 */;
import match from "match" /* 14116 */;

require = arg1;
const dependencyMap = arg6;
arg5.InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = CanonicalizeLocaleList.CanonicalizeLocaleList(arg1);
  const result1 = __exportStarResult2.CoerceOptionsToObject(arg2);
  let obj = Object.create(null);
  obj.localeMatcher = __exportStarResult4.GetOption(result1, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  const GetOptionResult = __exportStarResult4.GetOption(result1, "numberingSystem", "string", undefined, undefined);
  if (undefined !== GetOptionResult) {
    if (numberingSystemNames.indexOf(GetOptionResult) < 0) {
      const _RangeError = RangeError;
      const concat = "Invalid numberingSystems: ".concat;
      throw RangeError("Invalid numberingSystems: ".concat(GetOptionResult));
    }
  }
  obj.nu = GetOptionResult;
  const ResolveLocaleResult = match.ResolveLocale(Array.from(availableLocales), result, obj, ["nu"], localeData, getDefaultLocale);
  getMultiInternalSlots.invariant(!!localeData[ResolveLocaleResult.dataLocale], "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = tmp(14130).SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = __exportStarResult4.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      obj = { currencyDigitsData: null };
      obj[0] = currencyDigitsData;
      let num2 = tmp(14104).CurrencyDigits(internalSlots.currency, obj);
      let num3 = num2;
    }
    const result3 = tmp(14131).SetNumberFormatDigitOptions(internalSlots, result1, num3, num2, GetOptionResult1);
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = tmp(14089).GetOption(result1, "compactDisplay", "string", ["short", "long"], "short");
      str6 = "min2";
    }
    internalSlots.useGrouping = tmp(14091).GetStringOrBooleanOption(result1, "useGrouping", ["min2", "auto", "always"], "always", false, str6);
    internalSlots.signDisplay = tmp(14089).GetOption(result1, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
    return arg0;
  }
  num2 = 3;
  if ("percent" === style) {
    num2 = 0;
  }
  num3 = 0;
};
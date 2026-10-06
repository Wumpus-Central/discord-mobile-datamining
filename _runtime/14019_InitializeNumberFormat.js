// === Module 14019: InitializeNumberFormat ===

// Module 14019 (InitializeNumberFormat)
import CanonicalizeLocaleList from "CanonicalizeLocaleList" /* 13983 */;
import CoerceOptionsToObject from "CoerceOptionsToObject" /* 13985 */;
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 13988 */;
import GetOption from "GetOption" /* 13993 */;
import GetStringOrBooleanOption from "GetStringOrBooleanOption" /* 13995 */;
import CurrencyDigits from "CurrencyDigits" /* 14008 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14020 */;
import SetNumberFormatUnitOptions from "SetNumberFormatUnitOptions" /* 14034 */;
import SetNumberFormatDigitOptions from "SetNumberFormatDigitOptions" /* 14035 */;


export const InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  let availableLocales;
  let currencyDigitsData;
  let getDefaultLocale;
  let getInternalSlots;
  let localeData;
  let num2;
  let numberingSystemNames;
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = CanonicalizeLocaleList.CanonicalizeLocaleList(arg1);
  const result1 = CoerceOptionsToObject.CoerceOptionsToObject(arg2);
  const obj2 = Object.create(null);
  obj2.localeMatcher = GetOption.GetOption(result1, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  const GetOptionResult = GetOption.GetOption(result1, "numberingSystem", "string", undefined, undefined);
  if (undefined !== GetOptionResult) {
    if (numberingSystemNames.indexOf(GetOptionResult) < 0) {
      const _RangeError = RangeError;
      const concat = "Invalid numberingSystems: ".concat;
      throw RangeError("Invalid numberingSystems: ".concat(GetOptionResult));
    }
  }
  obj2.nu = GetOptionResult;
  const ResolveLocaleResult = LookupSupportedLocales.ResolveLocale(Array.from(availableLocales), result, obj2, ["nu"], localeData, getDefaultLocale);
  const tmp9 = !localeData[ResolveLocaleResult.dataLocale];
  UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(!tmp9, "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = SetNumberFormatUnitOptions.SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = GetOption.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    let num3;
    if ("standard" === GetOptionResult1) {
      const obj = { currencyDigitsData };
      num2 = CurrencyDigits.CurrencyDigits(internalSlots.currency, obj);
      num3 = num2;
    }
    const result3 = SetNumberFormatDigitOptions.SetNumberFormatDigitOptions(internalSlots, result1, num3, num2, GetOptionResult1);
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = GetOption.GetOption(result1, "compactDisplay", "string", ["short", "long"], "short");
      str6 = "min2";
    }
    internalSlots.useGrouping = GetStringOrBooleanOption.GetStringOrBooleanOption(result1, "useGrouping", ["min2", "auto", "always"], "always", false, str6);
    internalSlots.signDisplay = GetOption.GetOption(result1, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
    return arg0;
  }
  num2 = 3;
  if ("percent" === style) {
    num2 = 0;
  }
  num3 = 0;
};
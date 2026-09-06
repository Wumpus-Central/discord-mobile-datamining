// === Module 14237: InitializeNumberFormat ===

// Module 14237 (InitializeNumberFormat)
import CanonicalizeLocaleList from "CanonicalizeLocaleList" /* 14201 */;
import CoerceOptionsToObject from "CoerceOptionsToObject" /* 14203 */;
import _mod14206 from "module_14206" /* 14206 */;
import GetOption from "GetOption" /* 14211 */;
import GetStringOrBooleanOption from "GetStringOrBooleanOption" /* 14213 */;
import CurrencyDigits from "CurrencyDigits" /* 14226 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14238 */;
import SetNumberFormatUnitOptions from "SetNumberFormatUnitOptions" /* 14252 */;
import SetNumberFormatDigitOptions from "SetNumberFormatDigitOptions" /* 14253 */;

require = arg1;
const dependencyMap = arg6;

export const InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = CanonicalizeLocaleList.CanonicalizeLocaleList(arg1);
  const result1 = CoerceOptionsToObject.CoerceOptionsToObject(arg2);
  let obj = Object.create(null);
  obj.localeMatcher = GetOption.GetOption(result1, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  const GetOptionResult = GetOption.GetOption(result1, "numberingSystem", "string", undefined, undefined);
  if (undefined !== GetOptionResult) {
    if (numberingSystemNames.indexOf(GetOptionResult) < 0) {
      const _RangeError = RangeError;
      const concat = "Invalid numberingSystems: ".concat;
      throw RangeError("Invalid numberingSystems: ".concat(GetOptionResult));
    }
  }
  obj.nu = GetOptionResult;
  const ResolveLocaleResult = LookupSupportedLocales.ResolveLocale(Array.from(availableLocales), result, obj, ["nu"], localeData, getDefaultLocale);
  _mod14206.invariant(!!localeData[ResolveLocaleResult.dataLocale], "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = SetNumberFormatUnitOptions.SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = GetOption.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      obj = { currencyDigitsData };
      let num2 = CurrencyDigits.CurrencyDigits(internalSlots.currency, obj);
      let num3 = num2;
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
  const tmp9 = !localeData[ResolveLocaleResult.dataLocale];
};
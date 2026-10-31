// === Module 16064: InitializeNumberFormat ===

// Module 16064 (InitializeNumberFormat)
import _mod16028 from "module_16028" /* 16028 */;
import CoerceOptionsToObject from "CoerceOptionsToObject" /* 16030 */;
import _mod16033 from "module_16033" /* 16033 */;
import GetOption from "GetOption" /* 16038 */;
import GetStringOrBooleanOption from "GetStringOrBooleanOption" /* 16040 */;
import CurrencyDigits from "CurrencyDigits" /* 16053 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16065 */;
import SetNumberFormatUnitOptions from "SetNumberFormatUnitOptions" /* 16079 */;
import SetNumberFormatDigitOptions from "SetNumberFormatDigitOptions" /* 16080 */;

require = arg1;
const dependencyMap = arg6;

export function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = _mod16028.CanonicalizeLocaleList(arg1);
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
  _mod16033.invariant(!!localeData[ResolveLocaleResult.dataLocale], "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = SetNumberFormatUnitOptions.SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = GetOption.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      const obj = { currencyDigitsData };
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
}
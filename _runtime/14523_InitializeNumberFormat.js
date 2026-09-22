// _runtime/14523_InitializeNumberFormat.js
import _mod14487 from "metro/14487__.js";
import CoerceOptionsToObject from "14489_CoerceOptionsToObject.js";
import _mod14492 from "metro/14492__.js";
import GetOption from "14497_GetOption.js";
import GetStringOrBooleanOption from "14499_GetStringOrBooleanOption.js";
import CurrencyDigits from "14512_CurrencyDigits.js";
import LookupSupportedLocales from "14524_LookupSupportedLocales.js";
import SetNumberFormatUnitOptions from "14538_SetNumberFormatUnitOptions.js";
import SetNumberFormatDigitOptions from "14539_SetNumberFormatDigitOptions.js";

require = arg1;
const dependencyMap = arg6;

export const InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = _mod14487.CanonicalizeLocaleList(arg1);
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
  const ResolveLocaleResult = LookupSupportedLocales.ResolveLocale(
    Array.from(availableLocales),
    result,
    obj2,
    ["nu"],
    localeData,
    getDefaultLocale,
  );
  _mod14492.invariant(
    !!localeData[ResolveLocaleResult.dataLocale],
    "Missing locale data for ".concat(ResolveLocaleResult.dataLocale),
  );
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = SetNumberFormatUnitOptions.SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = GetOption.GetOption(
    result1,
    "notation",
    "string",
    ["standard", "scientific", "engineering", "compact"],
    "standard",
  );
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      const obj = { currencyDigitsData };
      let num2 = CurrencyDigits.CurrencyDigits(internalSlots.currency, obj);
      let num3 = num2;
    }
    const result3 = SetNumberFormatDigitOptions.SetNumberFormatDigitOptions(
      internalSlots,
      result1,
      num3,
      num2,
      GetOptionResult1,
    );
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = GetOption.GetOption(
        result1,
        "compactDisplay",
        "string",
        ["short", "long"],
        "short",
      );
      str6 = "min2";
    }
    internalSlots.useGrouping = GetStringOrBooleanOption.GetStringOrBooleanOption(
      result1,
      "useGrouping",
      ["min2", "auto", "always"],
      "always",
      false,
      str6,
    );
    internalSlots.signDisplay = GetOption.GetOption(
      result1,
      "signDisplay",
      "string",
      ["auto", "never", "always", "exceptZero", "negative"],
      "auto",
    );
    return arg0;
  }
  num2 = 3;
  if ("percent" === style) {
    num2 = 0;
  }
  num3 = 0;
  const tmp9 = !localeData[ResolveLocaleResult.dataLocale];
};

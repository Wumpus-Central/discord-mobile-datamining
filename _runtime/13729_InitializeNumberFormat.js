// _runtime/13729_InitializeNumberFormat.js
import _mod13693 from "metro/13693__.js";
import CoerceOptionsToObject from "13695_CoerceOptionsToObject.js";
import _mod13698 from "metro/13698__.js";
import GetOption from "13703_GetOption.js";
import GetStringOrBooleanOption from "13705_GetStringOrBooleanOption.js";
import CurrencyDigits from "13718_CurrencyDigits.js";
import LookupSupportedLocales from "13730_LookupSupportedLocales.js";
import SetNumberFormatUnitOptions from "13744_SetNumberFormatUnitOptions.js";
import SetNumberFormatDigitOptions from "13745_SetNumberFormatDigitOptions.js";

require = arg1;
const dependencyMap = arg6;

export const InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = _mod13693.CanonicalizeLocaleList(arg1);
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
  _mod13698.invariant(
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

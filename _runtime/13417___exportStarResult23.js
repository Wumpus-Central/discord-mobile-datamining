// _runtime/13417___exportStarResult23.js
import { CanonicalizeLocaleList } from "13381_CanonicalizeLocaleList.js";
import { __exportStarResult2 } from "13383___exportStarResult2.js";
import { getMultiInternalSlots } from "13386_getMultiInternalSlots.js";
import { __exportStarResult4 } from "13391___exportStarResult4.js";
import { match } from "13418_match.js";
const require = arg1;
const dependencyMap = arg6;
arg5.InitializeNumberFormat = function InitializeNumberFormat(arg0, arg1, arg2, arg3) {
  let availableLocales;
  let currencyDigitsData;
  let getDefaultLocale;
  let getInternalSlots;
  let localeData;
  let numberingSystemNames;
  ({ localeData, numberingSystemNames, getDefaultLocale } = arg3);
  ({ getInternalSlots, availableLocales, currencyDigitsData } = arg3);
  const result = CanonicalizeLocaleList /* CanonicalizeLocaleList */.CanonicalizeLocaleList(arg1);
  const result1 = __exportStarResult2 /* __exportStarResult2 */.CoerceOptionsToObject(arg2);
  let obj = Object.create(null);
  obj.localeMatcher = __exportStarResult4 /* __exportStarResult4 */.GetOption(result1, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  const GetOptionResult = __exportStarResult4 /* __exportStarResult4 */.GetOption(result1, "numberingSystem", "string", undefined, undefined);
  if (undefined !== GetOptionResult) {
    if (numberingSystemNames.indexOf(GetOptionResult) < 0) {
      const _RangeError = RangeError;
      const concat = "Invalid numberingSystems: ".concat;
      throw RangeError("Invalid numberingSystems: ".concat(GetOptionResult));
    }
  }
  obj.nu = GetOptionResult;
  const ResolveLocaleResult = match /* match */.ResolveLocale(Array.from(availableLocales), result, obj, ["nu"], localeData, getDefaultLocale);
  getMultiInternalSlots /* getMultiInternalSlots */.invariant(!!localeData[ResolveLocaleResult.dataLocale], "Missing locale data for ".concat(ResolveLocaleResult.dataLocale));
  const internalSlots = getInternalSlots(arg0);
  ({ locale: tmp11.locale, dataLocale: tmp11.dataLocale, nu: tmp11.numberingSystem } = ResolveLocaleResult);
  internalSlots.dataLocaleData = localeData[ResolveLocaleResult.dataLocale];
  const result2 = tmp(13432).SetNumberFormatUnitOptions(internalSlots, result1);
  const style = internalSlots.style;
  const GetOptionResult1 = __exportStarResult4 /* __exportStarResult4 */.GetOption(result1, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
  internalSlots.notation = GetOptionResult1;
  if ("currency" === style) {
    if ("standard" === GetOptionResult1) {
      obj = { currencyDigitsData: null };
      obj[0] = currencyDigitsData;
      let num2 = tmp(13406).CurrencyDigits(internalSlots.currency, obj);
      let num3 = num2;
    }
    const result3 = tmp(13433).SetNumberFormatDigitOptions(internalSlots, result1, num3, num2, GetOptionResult1);
    let str6 = "auto";
    if ("compact" === GetOptionResult1) {
      internalSlots.compactDisplay = tmp(13391).GetOption(result1, "compactDisplay", "string", ["short", "long"], "short");
      str6 = "min2";
    }
    internalSlots.useGrouping = tmp(13393).GetStringOrBooleanOption(result1, "useGrouping", ["min2", "auto", "always"], "always", false, str6);
    internalSlots.signDisplay = tmp(13391).GetOption(result1, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
    return arg0;
  }
  num2 = 3;
  if ("percent" === style) {
    num2 = 0;
  }
  num3 = 0;
};
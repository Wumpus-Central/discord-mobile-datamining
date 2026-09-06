// === Module 14252: SetNumberFormatUnitOptions ===

// Module 14252 (SetNumberFormatUnitOptions)
import _mod14206 from "module_14206" /* 14206 */;
import GetOption from "GetOption" /* 14211 */;
import IsWellFormedCurrencyCode from "IsWellFormedCurrencyCode" /* 14216 */;
import IsWellFormedUnitIdentifier from "IsWellFormedUnitIdentifier" /* 14217 */;

require = arg1;
const dependencyMap = arg6;

export const SetNumberFormatUnitOptions = function SetNumberFormatUnitOptions(internalSlots, result1) {
  let obj = result1;
  if (undefined === result1) {
    const _Object = Object;
    obj = Object.create(null);
  }
  const GetOptionResult = GetOption.GetOption(obj, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
  internalSlots.style = GetOptionResult;
  const str = GetOption.GetOption(obj, "currency", "string", undefined, undefined);
  let result = undefined === str;
  if (!result) {
    result = IsWellFormedCurrencyCode.IsWellFormedCurrencyCode(str);
  }
  _mod14206.invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  _mod14206.invariant(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = GetOption.GetOption(obj, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
  const GetOptionResult3 = GetOption.GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  if (!result1) {
    result1 = IsWellFormedUnitIdentifier.IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  _mod14206.invariant(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp17 = "unit" !== GetOptionResult;
  if (!tmp17) {
    tmp17 = undefined !== GetOptionResult3;
  }
  _mod14206.invariant(tmp17, "unit cannot be undefined", TypeError);
  const GetOptionResult2 = GetOption.GetOption(obj, "currencySign", "string", ["standard", "accounting"], "standard");
  if ("currency" === GetOptionResult) {
    internalSlots.currency = str.toUpperCase();
    internalSlots.currencyDisplay = GetOptionResult1;
    internalSlots.currencySign = GetOptionResult2;
  }
  if ("unit" === GetOptionResult) {
    internalSlots.unit = GetOptionResult3;
    internalSlots.unitDisplay = GetOptionResult4;
  }
  GetOptionResult4 = GetOption.GetOption(obj, "unitDisplay", "string", ["short", "narrow", "long"], "short");
};
// === Module 14329: SetNumberFormatUnitOptions ===

// Module 14329 (SetNumberFormatUnitOptions)
import _mod14283 from "module_14283" /* 14283 */;
import GetOption from "GetOption" /* 14288 */;
import IsWellFormedCurrencyCode from "IsWellFormedCurrencyCode" /* 14293 */;
import IsWellFormedUnitIdentifier from "IsWellFormedUnitIdentifier" /* 14294 */;

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
  _mod14283.invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  _mod14283.invariant(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = GetOption.GetOption(obj, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
  const GetOptionResult3 = GetOption.GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  if (!result1) {
    result1 = IsWellFormedUnitIdentifier.IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  _mod14283.invariant(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp17 = "unit" !== GetOptionResult;
  if (!tmp17) {
    tmp17 = undefined !== GetOptionResult3;
  }
  _mod14283.invariant(tmp17, "unit cannot be undefined", TypeError);
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
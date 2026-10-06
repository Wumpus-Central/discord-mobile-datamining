// _runtime/14034_SetNumberFormatUnitOptions.js
import UNICODE_EXTENSION_SEQUENCE_REGEX from "13988_UNICODE_EXTENSION_SEQUENCE_REGEX.js";
import GetOption from "13993_GetOption.js";
import IsWellFormedCurrencyCode from "13998_IsWellFormedCurrencyCode.js";
import IsWellFormedUnitIdentifier from "13999_IsWellFormedUnitIdentifier.js";

export const SetNumberFormatUnitOptions = function SetNumberFormatUnitOptions(internalSlots, result1) {
  let obj = result1;
  if (undefined === result1) {
    const _Object = Object;
    obj = Object.create(null);
  }
  const GetOptionResult = GetOption.GetOption(
    obj,
    "style",
    "string",
    ["decimal", "percent", "currency", "unit"],
    "decimal",
  );
  internalSlots.style = GetOptionResult;
  const str = GetOption.GetOption(obj, "currency", "string", undefined, undefined);
  let result = undefined === str;
  const invariant = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  if (!result) {
    result = IsWellFormedCurrencyCode.IsWellFormedCurrencyCode(str);
  }
  invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  const invariant2 = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  invariant2(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = GetOption.GetOption(
    obj,
    "currencyDisplay",
    "string",
    ["code", "symbol", "narrowSymbol", "name"],
    "symbol",
  );
  const GetOptionResult2 = GetOption.GetOption(obj, "currencySign", "string", ["standard", "accounting"], "standard");
  const GetOptionResult3 = GetOption.GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  const invariant3 = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  if (!result1) {
    result1 = IsWellFormedUnitIdentifier.IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  invariant3(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp17 = "unit" !== GetOptionResult;
  const invariant4 = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  if (!tmp17) {
    tmp17 = undefined !== GetOptionResult3;
  }
  invariant4(tmp17, "unit cannot be undefined", TypeError);
  const GetOptionResult4 = GetOption.GetOption(obj, "unitDisplay", "string", ["short", "narrow", "long"], "short");
  if ("currency" === GetOptionResult) {
    internalSlots.currency = str.toUpperCase();
    internalSlots.currencyDisplay = GetOptionResult1;
    internalSlots.currencySign = GetOptionResult2;
  }
  if ("unit" === GetOptionResult) {
    internalSlots.unit = GetOptionResult3;
    internalSlots.unitDisplay = GetOptionResult4;
  }
};

const require = arg1;
const dependencyMap = arg6;
arg5.SetNumberFormatUnitOptions = function SetNumberFormatUnitOptions(internalSlots, result1) {
  let obj = result1;
  if (undefined === result1) {
    const _Object = Object;
    obj = Object.create(null);
  }
  const GetOptionResult = require(13391) /* __exportStarResult4 */.GetOption(obj, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
  internalSlots.style = GetOptionResult;
  const str = require(13391) /* __exportStarResult4 */.GetOption(obj, "currency", "string", undefined, undefined);
  let result = undefined === str;
  if (!result) {
    result = tmp4(13396).IsWellFormedCurrencyCode(str);
  }
  require(13386) /* getMultiInternalSlots */.invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  require(13386) /* getMultiInternalSlots */.invariant(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = require(13391) /* __exportStarResult4 */.GetOption(obj, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
  const GetOptionResult3 = require(13391) /* __exportStarResult4 */.GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  if (!result1) {
    result1 = tmp4(13397).IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  require(13386) /* getMultiInternalSlots */.invariant(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp17 = "unit" !== GetOptionResult;
  if (!tmp17) {
    tmp17 = undefined !== GetOptionResult3;
  }
  require(13386) /* getMultiInternalSlots */.invariant(tmp17, "unit cannot be undefined", TypeError);
  const GetOptionResult2 = require(13391) /* __exportStarResult4 */.GetOption(obj, "currencySign", "string", ["standard", "accounting"], "standard");
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
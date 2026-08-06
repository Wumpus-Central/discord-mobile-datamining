// _runtime/13421___exportStarResult24.js
import e from "e";
import digitsToString from "digitsToString";
import e from "e";
import formatToParts from "formatToParts";
import { getMultiInternalSlots } from "13395_getMultiInternalSlots.js";
import { __exportStarResult13 } from "13409___exportStarResult13.js";
import { __exportStarResult21 } from "13411___exportStarResult21.js";


export const PartitionNumberPattern = function PartitionNumberPattern(internalSlots, isNaN) {
  let dataLocaleData;
  let formattedString;
  let num4;
  let pl;
  let roundedNumber;
  let tmp7;
  ({ pl, dataLocaleData } = internalSlots);
  const tmp = dataLocaleData.numbers.symbols[internalSlots.numberingSystem] || dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
  if (isNaN.isNaN()) {
    formattedString = tmp.nan;
    let num = 0;
    let num2 = 0;
    roundedNumber = isNaN;
  } else if (isNaN.isFinite()) {
    let num3 = 0;
    let timesResult1 = isNaN;
    if (!isNaN.isZero()) {
      getMultiInternalSlots.invariant(isNaN.isFinite(), "Input must be a mathematical value");
      let timesResult = isNaN;
      if ("percent" == internalSlots.style) {
        timesResult = isNaN.times(100);
      }
      [tmp7, num4] = __exportStarResult13.ComputeExponent(internalSlots, timesResult);
      timesResult1 = timesResult.times(digitsToString.default.pow(10, -tmp7));
      num3 = tmp7;
      const ComputeExponentResult = __exportStarResult13.ComputeExponent(internalSlots, timesResult);
      const _default = digitsToString.default;
      const tmp3 = require;
    }
    const result = __exportStarResult21.FormatNumericToString(internalSlots, timesResult1);
    ({ formattedString, roundedNumber } = result);
    num = num3;
    num2 = num4;
  } else {
    formattedString = tmp.infinity;
    num = 0;
    num2 = 0;
    roundedNumber = isNaN;
  }
  const signDisplay = internalSlots.signDisplay;
  let num7 = 0;
  if ("never" !== signDisplay) {
    if ("auto" === signDisplay) {
      if (roundedNumber.isPositive()) {
        let num12 = 0;
      } else {
        num12 = -1;
      }
      num7 = num12;
    } else if ("always" === signDisplay) {
      if (roundedNumber.isPositive()) {
        let num11 = 1;
      } else {
        num11 = -1;
      }
      num7 = num11;
    } else if ("exceptZero" === signDisplay) {
      let num9 = 0;
      if (!roundedNumber.isZero()) {
        let num10 = 1;
        if (roundedNumber.isNegative()) {
          num10 = -1;
        }
        num9 = num10;
      }
      num7 = num9;
    } else {
      getMultiInternalSlots.invariant("negative" === signDisplay, "signDisplay must be \"negative\"");
      let num8 = 0;
      if (roundedNumber.isNegative()) {
        num8 = 0;
        if (!roundedNumber.isZero()) {
          num8 = -1;
        }
      }
      num7 = num8;
    }
  }
  return formatToParts.default({ roundedNumber, formattedString, exponent: num, magnitude: num2, sign: num7 }, internalSlots.dataLocaleData, pl, internalSlots);
};
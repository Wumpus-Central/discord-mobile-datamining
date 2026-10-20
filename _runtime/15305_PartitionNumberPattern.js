// === Module 15305: PartitionNumberPattern ===

// Module 15305 (PartitionNumberPattern)
import digitsToString2 from "digitsToString" /* 15278 */;
import _mod15279 from "module_15279" /* 15279 */;
import ComputeExponent from "ComputeExponent" /* 15293 */;
import FormatNumericToString from "FormatNumericToString" /* 15295 */;
import _mod15300 from "module_15300" /* 15300 */;
import e_mod from "e" /* 1174 */;

let e = e_mod;
const digitsToString = e.__importDefault(digitsToString2);
let e = e_mod;
const module_15300 = e.__importDefault(_mod15300);

export const PartitionNumberPattern = function PartitionNumberPattern(internalSlots, isNaN) {
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
      _mod15279.invariant(isNaN.isFinite(), "Input must be a mathematical value");
      let timesResult = isNaN;
      if ("percent" == internalSlots.style) {
        timesResult = isNaN.times(100);
      }
      [tmp7, num4] = ComputeExponent.ComputeExponent(internalSlots, timesResult);
      timesResult1 = timesResult.times(digitsToString.default.pow(10, -tmp7));
      num3 = tmp7;
      const ComputeExponentResult = ComputeExponent.ComputeExponent(internalSlots, timesResult);
      const _default = digitsToString.default;
    }
    const result = FormatNumericToString.FormatNumericToString(internalSlots, timesResult1);
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
      _mod15279.invariant("negative" === signDisplay, "signDisplay must be \"negative\"");
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
  return module_15300.default({ roundedNumber, formattedString, exponent: num, magnitude: num2, sign: num7 }, internalSlots.dataLocaleData, pl, internalSlots);
};
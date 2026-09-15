// === Module 14330: PartitionNumberPattern ===

// Module 14330 (PartitionNumberPattern)
import digitsToString2 from "digitsToString" /* 14303 */;
import _mod14304 from "module_14304" /* 14304 */;
import ComputeExponent from "ComputeExponent" /* 14318 */;
import FormatNumericToString from "FormatNumericToString" /* 14320 */;
import _mod14325 from "module_14325" /* 14325 */;
import e_mod from "e" /* 1161 */;

let e = e_mod;
const digitsToString = e.__importDefault(digitsToString2);
let e = e_mod;
const module_14325 = e.__importDefault(_mod14325);

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
      _mod14304.invariant(isNaN.isFinite(), "Input must be a mathematical value");
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
      _mod14304.invariant("negative" === signDisplay, "signDisplay must be \"negative\"");
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
  return module_14325.default({ roundedNumber, formattedString, exponent: num, magnitude: num2, sign: num7 }, internalSlots.dataLocaleData, pl, internalSlots);
};
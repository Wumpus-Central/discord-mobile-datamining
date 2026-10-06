// === Module 14014: PartitionNumberPattern ===

// Module 14014 (PartitionNumberPattern)
import _mod13987 from "module_13987" /* 13987 */;
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 13988 */;
import ComputeExponent from "ComputeExponent" /* 14002 */;
import FormatNumericToString from "FormatNumericToString" /* 14004 */;
import formatToParts2 from "formatToParts" /* 14009 */;
import module_1172_mod from "module_1172" /* 1172 */;

let module_1172 = module_1172_mod;
const module_13987 = module_1172.__importDefault(_mod13987);
module_1172 = module_1172_mod;
const formatToParts = module_1172.__importDefault(formatToParts2);

export const PartitionNumberPattern = function PartitionNumberPattern(internalSlots, isNaN) {
  let dataLocaleData;
  let formattedString;
  let num;
  let num2;
  let num4;
  let pl;
  let roundedNumber;
  let tmp7;
  ({ pl, dataLocaleData } = internalSlots);
  const tmp = dataLocaleData.numbers.symbols[internalSlots.numberingSystem] || dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
  if (isNaN.isNaN()) {
    formattedString = tmp.nan;
    num = 0;
    num2 = 0;
    roundedNumber = isNaN;
  } else if (isNaN.isFinite()) {
    let num3 = 0;
    let timesResult1 = isNaN;
    if (!isNaN.isZero()) {
      UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(isNaN.isFinite(), "Input must be a mathematical value");
      let timesResult = isNaN;
      if ("percent" == internalSlots.style) {
        timesResult = isNaN.times(100);
      }
      [tmp7, num4] = ComputeExponent.ComputeExponent(internalSlots, timesResult);
      ComputeExponent.ComputeExponent(internalSlots, timesResult);
      const _default = module_13987.default;
      timesResult1 = timesResult.times(_default.pow(10, -tmp7));
      num3 = tmp7;
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
      let num12;
      if (roundedNumber.isPositive()) {
        num12 = 0;
      } else {
        num12 = -1;
      }
      num7 = num12;
    } else if ("always" === signDisplay) {
      let num11;
      if (roundedNumber.isPositive()) {
        num11 = 1;
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
      UNICODE_EXTENSION_SEQUENCE_REGEX.invariant("negative" === signDisplay, "signDisplay must be \"negative\"");
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
  const obj = { roundedNumber, formattedString, exponent: num, magnitude: num2, sign: num7 };
  return formatToParts.default(obj, internalSlots.dataLocaleData, pl, internalSlots);
};
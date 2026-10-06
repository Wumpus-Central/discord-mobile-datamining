// === Module 14007: ToRawFixed ===

// Module 14007 (ToRawFixed)
import _mod13987 from "module_13987" /* 13987 */;
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 13988 */;
import ApplyUnsignedRoundingMode from "ApplyUnsignedRoundingMode" /* 14000 */;
import module_1172 from "module_1172" /* 1172 */;

const module_13987 = module_1172.__importDefault(_mod13987);
let _default = module_13987.default;
let result = _default.set({ toExpPos: 100 });

export const ToRawFixed = function ToRawFixed(ZERO, minimumFractionDigits, maximumFractionDigits, roundingIncrement, result) {
  let length;
  let text;
  const _default = module_13987.default;
  const timesResult = ZERO.times(_default.pow(10, maximumFractionDigits));
  const floorResult = timesResult.floor();
  const divResult = floorResult.div(roundingIncrement);
  const floorResult1 = divResult.floor();
  const timesResult1 = floorResult1.times(roundingIncrement);
  const _default2 = module_13987.default;
  const timesResult2 = timesResult1.times(_default2.pow(10, -maximumFractionDigits));
  const _default3 = module_13987.default;
  const timesResult3 = ZERO.times(_default3.pow(10, maximumFractionDigits));
  const ceilResult = timesResult3.ceil();
  const divResult1 = ceilResult.div(roundingIncrement);
  const ceilResult1 = divResult1.ceil();
  let str = ceilResult1.times(roundingIncrement);
  const _default4 = module_13987.default;
  let timesResult4 = str.times(_default4.pow(10, -maximumFractionDigits));
  result = ApplyUnsignedRoundingMode.ApplyUnsignedRoundingMode(ZERO, timesResult2, timesResult4, result);
  if (result.eq(timesResult2)) {
    timesResult4 = timesResult2;
    str = timesResult1;
  }
  let str2 = "0";
  if (!str.isZero()) {
    str2 = str.toString();
  }
  if (0 !== maximumFractionDigits) {
    let sum = str2;
    let sum1 = length2;
    if (str2.length <= maximumFractionDigits) {
      sum = UNICODE_EXTENSION_SEQUENCE_REGEX.repeat("0", maximumFractionDigits - length2 + 1) + str2;
      sum1 = maximumFractionDigits + 1;
    }
    const substr = sum.slice(0, sum1 - maximumFractionDigits);
    text = `${arr3}.${arr2.slice(arr2.length - maximumFractionDigits)}`;
    length = substr.length;
  } else {
    length = str2.length;
    text = str2;
  }
  let diff = maximumFractionDigits - minimumFractionDigits;
  let arr4 = text;
  if (diff > 0) {
    let arr5 = text;
    arr4 = text;
    if ("0" === text[text.length - 1]) {
      const substr1 = arr5.slice(0, arr5.length - 1);
      const diff1 = diff - 1;
      arr4 = substr1;
      while (diff1 > 0) {
        diff = diff1;
        arr5 = substr1;
        arr4 = substr1;
        if ("0" !== substr1[substr1.length - 1]) {
          break;
        }
      }
    }
  }
  let substr2 = arr4;
  if ("." === arr4[arr4.length - 1]) {
    substr2 = arr4.slice(0, arr4.length - 1);
  }
  return { formattedString: substr2, roundedNumber: timesResult4, integerDigitsCount: length, roundingMagnitude: -maximumFractionDigits };
};
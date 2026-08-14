// _runtime/13569___exportStarResult28.js
import e from "e";
import digitsToString from "digitsToString";
import { getMultiInternalSlots } from "13550_getMultiInternalSlots.js";
import { __exportStarResult11 } from "13562___exportStarResult11.js";

let result = digitsToString.default.set({ toExpPos: 100 });

export const ToRawFixed = function ToRawFixed(ZERO, minimumFractionDigits, maximumFractionDigits, roundingIncrement, result) {
  const _default = digitsToString.default;
  const timesResult = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits));
  const floorResult = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).floor();
  const divResult = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement);
  const timesResult1 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement).floor().times(roundingIncrement);
  const timesResult2 = timesResult1.times(digitsToString.default.pow(10, -maximumFractionDigits));
  const _default2 = digitsToString.default;
  const _default3 = digitsToString.default;
  const floorResult1 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).floor().div(roundingIncrement).floor();
  const timesResult3 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits));
  const ceilResult = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).ceil();
  const divResult1 = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).ceil().div(roundingIncrement);
  let str = ZERO.times(digitsToString.default.pow(10, maximumFractionDigits)).ceil().div(roundingIncrement).ceil().times(roundingIncrement);
  let timesResult4 = str.times(digitsToString.default.pow(10, -maximumFractionDigits));
  result = __exportStarResult11.ApplyUnsignedRoundingMode(ZERO, timesResult2, timesResult4, result);
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
      sum = getMultiInternalSlots.repeat("0", maximumFractionDigits - length2 + 1) + str2;
      sum1 = maximumFractionDigits + 1;
    }
    const substr = sum.slice(0, sum1 - maximumFractionDigits);
    let text = `${arr3}.${arr2.slice(arr2.length - maximumFractionDigits)}`;
    let length = substr.length;
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
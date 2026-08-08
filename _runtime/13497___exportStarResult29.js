// _runtime/13497___exportStarResult29.js
import e from "e";
import digitsToString from "digitsToString";
import { getMultiInternalSlots } from "13479_getMultiInternalSlots.js";
import { TEN } from "13481_TEN.js";
import { __exportStarResult11 } from "13491___exportStarResult11.js";


export const ToRawPrecision = function ToRawPrecision(ZERO, minimumSignificantDigits, maximumSignificantDigits, result) {
  let ceilResult1;
  let floorResult;
  let timesResult;
  let tmp4;
  if (ZERO.isZero()) {
    let repeatResult = getMultiInternalSlots.repeat("0", maximumSignificantDigits);
    let roundedNumber = TEN.ZERO;
    let roundingMagnitude = 0;
    let tmp16 = require;
  } else {
    const powResult1 = digitsToString.default.pow(10, maximumSignificantDigits - 1);
    const _default = digitsToString.default;
    const _default2 = digitsToString.default;
    const powResult = digitsToString.default.pow(10, maximumSignificantDigits);
    const divResult = ZERO.div(powResult1);
    const logResult = ZERO.div(powResult1).log(10);
    const plusResult = ZERO.div(powResult1).log(10).plus(maximumSignificantDigits);
    let ceilResult = ZERO.div(powResult1).log(10).plus(maximumSignificantDigits).minus(1).ceil();
    while (true) {
      tmp4 = digitsToString;
      let _default3 = digitsToString.default;
      let minusResult1 = ceilResult.minus(maximumSignificantDigits);
      let divResult1 = ZERO.div(_default3.pow(10, minusResult1.plus(1)));
      floorResult = divResult1.floor();
      let tmp5 = ceilResult;
      if (floorResult.lessThan(powResult)) {
        if (floorResult.greaterThanOrEqualTo(powResult1)) {
          let _default4 = tmp4.default;
          let minusResult2 = ceilResult.minus(maximumSignificantDigits);
          timesResult = floorResult.times(_default4.pow(10, minusResult2.plus(1)));
          if (timesResult.lessThanOrEqualTo(ZERO)) {
            break;
          }
        }
      }
      ceilResult = ceilResult.minus(1);
      continue;
    }
    const powResult2 = tmp4.default.pow(10, maximumSignificantDigits);
    const _default5 = tmp4.default;
    const _default6 = tmp4.default;
    const minusResult = ZERO.div(powResult1).log(10).plus(maximumSignificantDigits).minus(1);
    const powResult3 = tmp4.default.pow(10, maximumSignificantDigits - 1);
    const divResult2 = ZERO.div(powResult2);
    const logResult1 = ZERO.div(powResult2).log(10);
    const plusResult1 = ZERO.div(powResult2).log(10).plus(maximumSignificantDigits);
    let floorResult1 = ZERO.div(powResult2).log(10).plus(maximumSignificantDigits).minus(1).floor();
    while (true) {
      let _default7 = digitsToString.default;
      let tmp8 = digitsToString;
      let minusResult4 = floorResult1.minus(maximumSignificantDigits);
      let divResult3 = ZERO.div(_default7.pow(10, minusResult4.plus(1)));
      ceilResult1 = divResult3.ceil();
      let tmp9 = floorResult1;
      if (ceilResult1.lessThan(powResult2)) {
        if (ceilResult1.greaterThanOrEqualTo(powResult3)) {
          let _default8 = tmp8.default;
          let minusResult5 = floorResult1.minus(maximumSignificantDigits);
          roundedNumber = ceilResult1.times(_default8.pow(10, minusResult5.plus(1)));
          if (roundedNumber.greaterThanOrEqualTo(ZERO)) {
            break;
          }
        }
      }
      floorResult1 = floorResult1.plus(1);
      continue;
    }
    result = __exportStarResult11.ApplyUnsignedRoundingMode(ZERO, timesResult, roundedNumber, result);
    if (result.eq(timesResult)) {
      roundingMagnitude = ceilResult.toNumber();
      let str = floorResult;
      roundedNumber = timesResult;
    } else {
      roundingMagnitude = floorResult1.toNumber();
      str = ceilResult1;
    }
    repeatResult = str.toString();
    tmp16 = require;
    const minusResult3 = ZERO.div(powResult2).log(10).plus(maximumSignificantDigits).minus(1);
    const tmp11 = require;
  }
  if (roundingMagnitude >= maximumSignificantDigits - 1) {
    let sum = repeatResult + tmp16(13479).repeat("0", roundingMagnitude - maximumSignificantDigits + 1);
    let integerDigitsCount = roundingMagnitude + 1;
  } else if (roundingMagnitude >= 0) {
    const text = `${arr.slice(0, num3 + 1)}.`;
    sum = `${arr.slice(0, num3 + 1)}.${arr.slice(arr.length - (maximumSignificantDigits - (num3 + 1)))}`;
    integerDigitsCount = roundingMagnitude + 1;
  } else {
    tmp16(13479).invariant(roundingMagnitude < 0, "e should be less than 0");
    sum = `0.${tmp16(13479).repeat("0", -num3 - 1)}${arr}`;
    integerDigitsCount = 1;
  }
  let formattedString = sum;
  if (sum.includes(".")) {
    formattedString = sum;
    if (maximumSignificantDigits > minimumSignificantDigits) {
      let diff = maximumSignificantDigits - minimumSignificantDigits;
      let arr4 = sum;
      if (diff > 0) {
        let arr3 = sum;
        arr4 = sum;
        if ("0" === sum[sum.length - 1]) {
          const substr = arr3.slice(0, arr3.length - 1);
          const diff1 = diff - 1;
          arr4 = substr;
          while (diff1 > 0) {
            diff = diff1;
            arr3 = substr;
            arr4 = substr;
            if ("0" !== substr[substr.length - 1]) {
              break;
            }
          }
        }
      }
      formattedString = arr4;
      if ("." === arr4[arr4.length - 1]) {
        formattedString = arr4.slice(0, arr4.length - 1);
      }
    }
  }
  return { formattedString, roundedNumber, integerDigitsCount, roundingMagnitude };
};
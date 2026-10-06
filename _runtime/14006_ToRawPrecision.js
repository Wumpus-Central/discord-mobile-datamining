// _runtime/14006_ToRawPrecision.js
import _mod13987 from "metro/13987__.js";
import UNICODE_EXTENSION_SEQUENCE_REGEX from "13988_UNICODE_EXTENSION_SEQUENCE_REGEX.js";
import TEN from "13990_TEN.js";
import ApplyUnsignedRoundingMode from "14000_ApplyUnsignedRoundingMode.js";
import 01172__ from "metro/01172__.js";

const module_13987 = module_1172.__importDefault(_mod13987);

export const ToRawPrecision = function ToRawPrecision(ZERO, minimumSignificantDigits, maximumSignificantDigits, result) {
  let ceilResult1;
  let floorResult;
  let integerDigitsCount;
  let repeatResult;
  let roundedNumber;
  let roundingMagnitude;
  let sum;
  let timesResult;
  let tmp16;
  if (ZERO.isZero()) {
    repeatResult = UNICODE_EXTENSION_SEQUENCE_REGEX.repeat("0", maximumSignificantDigits);
    roundedNumber = TEN.ZERO;
    roundingMagnitude = 0;
    tmp16 = require;
  } else {
    let str;
    const _default = module_13987.default;
    const _default2 = module_13987.default;
    const powResult = _default.pow(10, maximumSignificantDigits);
    const powResult1 = _default2.pow(10, maximumSignificantDigits - 1);
    const divResult = ZERO.div(powResult1);
    const logResult = divResult.log(10);
    const plusResult = logResult.plus(maximumSignificantDigits);
    const minusResult = plusResult.minus(1);
    let ceilResult = minusResult.ceil();
    while (true) {
      let _default3 = module_13987.default;
      let div = ZERO.div;
      let pow = _default3.pow;
      let minusResult1 = ceilResult.minus(maximumSignificantDigits);
      let divResult1 = div(pow(10, minusResult1.plus(1)));
      floorResult = divResult1.floor();
      if (floorResult.lessThan(powResult)) {
        if (floorResult.greaterThanOrEqualTo(powResult1)) {
          let _default4 = module_13987.default;
          let times = floorResult.times;
          let pow2 = _default4.pow;
          let minusResult2 = ceilResult.minus(maximumSignificantDigits);
          timesResult = times(pow2(10, minusResult2.plus(1)));
          if (timesResult.lessThanOrEqualTo(ZERO)) {
            break;
          }
        }
      }
      ceilResult = ceilResult.minus(1);
      continue;
    }
    const _default5 = module_13987.default;
    const powResult2 = _default5.pow(10, maximumSignificantDigits);
    const _default6 = module_13987.default;
    const powResult3 = _default6.pow(10, maximumSignificantDigits - 1);
    const divResult2 = ZERO.div(powResult2);
    const logResult1 = divResult2.log(10);
    const plusResult1 = logResult1.plus(maximumSignificantDigits);
    const minusResult3 = plusResult1.minus(1);
    let floorResult1 = minusResult3.floor();
    while (true) {
      let _default7 = module_13987.default;
      let div2 = ZERO.div;
      let pow3 = _default7.pow;
      let minusResult4 = floorResult1.minus(maximumSignificantDigits);
      let div2Result = div2(pow3(10, minusResult4.plus(1)));
      ceilResult1 = div2Result.ceil();
      if (ceilResult1.lessThan(powResult2)) {
        if (ceilResult1.greaterThanOrEqualTo(powResult3)) {
          let _default8 = module_13987.default;
          let times2 = ceilResult1.times;
          let pow4 = _default8.pow;
          let minusResult5 = floorResult1.minus(maximumSignificantDigits);
          roundedNumber = times2(pow4(10, minusResult5.plus(1)));
          if (roundedNumber.greaterThanOrEqualTo(ZERO)) {
            break;
          }
        }
      }
      floorResult1 = floorResult1.plus(1);
      continue;
    }
    result = ApplyUnsignedRoundingMode.ApplyUnsignedRoundingMode(ZERO, timesResult, roundedNumber, result);
    if (result.eq(timesResult)) {
      roundingMagnitude = ceilResult.toNumber();
      str = floorResult;
      roundedNumber = timesResult;
    } else {
      roundingMagnitude = floorResult1.toNumber();
      str = ceilResult1;
    }
    repeatResult = str.toString();
    tmp16 = require;
  }
  if (roundingMagnitude >= maximumSignificantDigits - 1) {
    sum = repeatResult + tmp16(13988).repeat("0", roundingMagnitude - maximumSignificantDigits + 1);
    integerDigitsCount = roundingMagnitude + 1;
  } else if (roundingMagnitude >= 0) {
    const text = `${arr.slice(0, num3 + 1)}.`;
    sum = `${arr.slice(0, num3 + 1)}.${arr.slice(arr.length - (maximumSignificantDigits - (num3 + 1)))}`;
    integerDigitsCount = roundingMagnitude + 1;
  } else {
    tmp16(13988).invariant(roundingMagnitude < 0, "e should be less than 0");
    sum = `0.${tmp16(13988).repeat("0", -num3 - 1)}${arr}`;
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
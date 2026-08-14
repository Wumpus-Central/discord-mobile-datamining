// _runtime/13564___exportStarResult13.js
import e from "e";
import digitsToString from "digitsToString";
import { __exportStarResult14 } from "13565___exportStarResult14.js";
import { __exportStarResult21 } from "13566___exportStarResult21.js";


export const ComputeExponent = function ComputeExponent(internalSlots, timesResult) {
  if (timesResult.isZero()) {
    return [0, 0];
  } else {
    let negatedResult = timesResult;
    if (timesResult.isNegative()) {
      negatedResult = timesResult.negated();
    }
    const floorResult = negatedResult.log(10).floor();
    const result = __exportStarResult14.ComputeExponentForMagnitude(internalSlots, floorResult);
    const _default = digitsToString.default;
    const logResult = negatedResult.log(10);
    const tmp2 = require;
    const result1 = __exportStarResult21.FormatNumericToString(internalSlots, negatedResult.times(digitsToString.default.pow(10, -result)));
    const roundedNumber = result1.roundedNumber;
    if (roundedNumber.isZero()) {
      const items = [result, floorResult.toNumber()];
      return items;
    } else {
      const roundedNumber2 = result1.roundedNumber;
      const logResult1 = roundedNumber2.log(10);
      if (floorResult1.eq(floorResult.minus(result))) {
        const items1 = [result, floorResult.toNumber()];
        return items1;
      } else {
        const items2 = [tmp2(13565).ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), floorResult.plus(1).toNumber()];
        return items2;
      }
      floorResult1 = roundedNumber2.log(10).floor();
    }
    timesResult = negatedResult.times(digitsToString.default.pow(10, -result));
  }
};
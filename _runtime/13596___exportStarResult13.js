// === Module 13596: __exportStarResult13 ===

// Module 13596 (__exportStarResult13)
import digitsToString2 from "digitsToString" /* 13581 */;
import __exportStarResult14 from "__exportStarResult14" /* 13597 */;
import __exportStarResult21 from "__exportStarResult21" /* 13598 */;
import e from "e" /* 1281 */;

const digitsToString = e.__importDefault(digitsToString2);

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
    timesResult = negatedResult.times(digitsToString.default.pow(10, -result));
    const result1 = __exportStarResult21.FormatNumericToString(internalSlots, timesResult);
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
        const items2 = [__exportStarResult14.ComputeExponentForMagnitude(internalSlots, floorResult.plus(1)), floorResult.plus(1).toNumber()];
        return items2;
      }
      floorResult1 = roundedNumber2.log(10).floor();
    }
    const _default = digitsToString.default;
    const logResult = negatedResult.log(10);
  }
};
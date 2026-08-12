// _runtime/13558___exportStarResult11.js
import { getMultiInternalSlots } from "13546_getMultiInternalSlots.js";
const require = arg1;
const dependencyMap = arg6;
arg5.ApplyUnsignedRoundingMode = function ApplyUnsignedRoundingMode(eq, timesResult, roundedNumber, result) {
  if (eq.eq(timesResult)) {
    return timesResult;
  } else {
    const concat = "x should be between r1 and r2 but x=".concat;
    const combined = "x should be between r1 and r2 but x=".concat(eq, ", r1=");
    const combined1 = combined.concat(timesResult, ", r2=");
    getMultiInternalSlots.invariant(timesResult.lessThan(eq) && eq.lessThan(roundedNumber), combined1.concat(roundedNumber));
    if ("zero" === result) {
      return timesResult;
    } else if ("infinity" === result) {
      return roundedNumber;
    } else {
      const minusResult = eq.minus(timesResult);
      const minusResult1 = roundedNumber.minus(eq);
      if (minusResult.lessThan(minusResult1)) {
        return timesResult;
      } else if (minusResult1.lessThan(minusResult)) {
        return roundedNumber;
      } else {
        tmp2(13546).invariant(minusResult.eq(minusResult1), "d1 should be equal to d2");
        if ("half-zero" === result) {
          return timesResult;
        } else if ("half-infinity" === result) {
          return roundedNumber;
        } else {
          tmp2(13546).invariant("half-even" === result, "unsignedRoundingMode should be half-even");
          const divResult = timesResult.div(roundedNumber.minus(timesResult));
          return timesResult.div(roundedNumber.minus(timesResult)).mod(2).isZero() ? timesResult : roundedNumber;
        }
      }
    }
    const tmp4 = timesResult.lessThan(eq) && eq.lessThan(roundedNumber);
  }
};
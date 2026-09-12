// === Module 14306: ApplyUnsignedRoundingMode ===

// Module 14306 (ApplyUnsignedRoundingMode)
import _mod14294 from "module_14294" /* 14294 */;

require = arg1;
const dependencyMap = arg6;

export const ApplyUnsignedRoundingMode = function ApplyUnsignedRoundingMode(eq, timesResult, roundedNumber, formattedString) {
  if (eq.eq(timesResult)) {
    return timesResult;
  } else {
    const concat = "x should be between r1 and r2 but x=".concat;
    const combined = "x should be between r1 and r2 but x=".concat(eq, ", r1=");
    const combined1 = combined.concat(timesResult, ", r2=");
    _mod14294.invariant(timesResult.lessThan(eq) && eq.lessThan(roundedNumber), combined1.concat(roundedNumber));
    if ("zero" === formattedString) {
      return timesResult;
    } else if ("infinity" === formattedString) {
      return roundedNumber;
    } else {
      const minusResult = eq.minus(timesResult);
      const minusResult1 = roundedNumber.minus(eq);
      if (minusResult.lessThan(minusResult1)) {
        return timesResult;
      } else if (minusResult1.lessThan(minusResult)) {
        return roundedNumber;
      } else {
        _mod14294.invariant(minusResult.eq(minusResult1), "d1 should be equal to d2");
        if ("half-zero" === formattedString) {
          return timesResult;
        } else if ("half-infinity" === formattedString) {
          return roundedNumber;
        } else {
          _mod14294.invariant("half-even" === formattedString, "unsignedRoundingMode should be half-even");
          const divResult = timesResult.div(roundedNumber.minus(timesResult));
          return timesResult.div(roundedNumber.minus(timesResult)).mod(2).isZero() ? timesResult : roundedNumber;
        }
      }
    }
    const tmp4 = timesResult.lessThan(eq) && eq.lessThan(roundedNumber);
  }
};
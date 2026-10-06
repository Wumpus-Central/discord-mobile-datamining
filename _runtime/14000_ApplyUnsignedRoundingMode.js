// === Module 14000: ApplyUnsignedRoundingMode ===

// Module 14000 (ApplyUnsignedRoundingMode)
import UNICODE_EXTENSION_SEQUENCE_REGEX from "UNICODE_EXTENSION_SEQUENCE_REGEX" /* 13988 */;


export const ApplyUnsignedRoundingMode = function ApplyUnsignedRoundingMode(eq, timesResult, roundedNumber, result) {
  if (eq.eq(timesResult)) {
    return timesResult;
  } else {
    const invariant = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
    const concat = "x should be between r1 and r2 but x=".concat;
    const tmp4 = timesResult.lessThan(eq) && eq.lessThan(roundedNumber);
    const combined = "x should be between r1 and r2 but x=".concat(eq, ", r1=");
    const combined1 = combined.concat(timesResult, ", r2=");
    invariant(tmp4, combined1.concat(roundedNumber));
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
        UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(minusResult.eq(minusResult1), "d1 should be equal to d2");
        if ("half-zero" === result) {
          return timesResult;
        } else if ("half-infinity" === result) {
          return roundedNumber;
        } else {
          UNICODE_EXTENSION_SEQUENCE_REGEX.invariant("half-even" === result, "unsignedRoundingMode should be half-even");
          const divResult = timesResult.div(roundedNumber.minus(timesResult));
          const modResult = divResult.mod(2);
          return modResult.isZero() ? timesResult : roundedNumber;
        }
      }
    }
  }
};
// === Module 13598: __exportStarResult21 ===

// Module 13598 (__exportStarResult21)
import getMultiInternalSlots from "getMultiInternalSlots" /* 13582 */;
import TEN from "TEN" /* 13584 */;
import __exportStarResult22 from "__exportStarResult22" /* 13599 */;
import __exportStarResult29 from "__exportStarResult29" /* 13600 */;
import __exportStarResult28 from "__exportStarResult28" /* 13601 */;

require = arg1;
const dependencyMap = arg6;
arg5.FormatNumericToString = function FormatNumericToString(roundingType, timesResult) {
  if (timesResult.isZero()) {
    if (timesResult.isNegative()) {
      let ZERO = TEN.ZERO;
      let str2 = "negative";
      let tmp5Result = dependencyMap;
    }
    roundingType = roundingType.roundingType;
    const result = __exportStarResult22.GetUnsignedRoundingMode(roundingType.roundingMode, tmp9);
    if ("significantDigits" === roundingType) {
      let ToRawPrecisionResult = __exportStarResult29.ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
    } else if ("fractionDigits" === roundingType) {
      ToRawPrecisionResult = __exportStarResult28.ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
    } else {
      const ToRawPrecisionResult1 = __exportStarResult29.ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
      let ToRawFixedResult = __exportStarResult28.ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
      if ("morePrecision" === roundingType.roundingType) {
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawFixedResult = ToRawPrecisionResult1;
        }
        ToRawPrecisionResult = ToRawFixedResult;
      } else {
        getMultiInternalSlots.invariant("lessPrecision" === roundingType.roundingType, "Invalid roundingType");
        ToRawPrecisionResult = ToRawPrecisionResult1;
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawPrecisionResult = ToRawFixedResult;
        }
      }
    }
    ({ roundedNumber, formattedString } = ToRawPrecisionResult);
    let substr = formattedString;
    if ("stripIfInteger" === roundingType.trailingZeroDisplay) {
      substr = formattedString;
      if (roundedNumber.isInteger()) {
        const index = formattedString.indexOf(".");
        substr = formattedString;
        if (index > -1) {
          substr = formattedString.slice(0, index);
        }
      }
    }
    const integerDigitsCount = ToRawPrecisionResult.integerDigitsCount;
    const minimumIntegerDigits = roundingType.minimumIntegerDigits;
    let sum = substr;
    if (integerDigitsCount < minimumIntegerDigits) {
      sum = getMultiInternalSlots.repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
    }
    if ("negative" !== str2) {
      const obj = { roundedNumber: null, formattedString: null };
      obj[0] = roundedNumber;
      obj[1] = sum;
      return obj;
    } else if (roundedNumber.isZero()) {
      tmp5Result = TEN;
      let NEGATIVE_ZERO = tmp5Result.NEGATIVE_ZERO;
    } else {
      NEGATIVE_ZERO = roundedNumber.negated();
    }
  }
  getMultiInternalSlots.invariant(timesResult.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
  let str = "positive";
  if (timesResult.lessThan(0)) {
    str = "negative";
  }
  ZERO = timesResult;
  str2 = str;
  tmp5Result = dependencyMap;
  if ("negative" === str) {
    ZERO = timesResult.negated();
    str2 = str;
    tmp5Result = dependencyMap;
  }
};
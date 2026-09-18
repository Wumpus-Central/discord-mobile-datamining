// === Module 14441: FormatNumericToString ===

// Module 14441 (FormatNumericToString)
import TEN from "TEN" /* 14427 */;

const _mod14425 = tmp5(14425);
const GetUnsignedRoundingMode = tmp5(14442);
const ToRawPrecision = tmp5(14443);
const ToRawFixed = tmp5(14444);
require = arg1;
const dependencyMap = arg6;

export const FormatNumericToString = function FormatNumericToString(roundingType, timesResult) {
  if (timesResult.isZero()) {
    if (timesResult.isNegative()) {
      let ZERO = TEN.ZERO;
      let str2 = "negative";
      let tmp5Result = dependencyMap;
    }
    roundingType = roundingType.roundingType;
    const result = GetUnsignedRoundingMode.GetUnsignedRoundingMode(roundingType.roundingMode, tmp9);
    if ("significantDigits" === roundingType) {
      let ToRawPrecisionResult = ToRawPrecision.ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
    } else if ("fractionDigits" === roundingType) {
      ToRawPrecisionResult = ToRawFixed.ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
    } else {
      const ToRawPrecisionResult1 = ToRawPrecision.ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
      let ToRawFixedResult = ToRawFixed.ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
      if ("morePrecision" === roundingType.roundingType) {
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawFixedResult = ToRawPrecisionResult1;
        }
        ToRawPrecisionResult = ToRawFixedResult;
      } else {
        _mod14425.invariant("lessPrecision" === roundingType.roundingType, "Invalid roundingType");
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
      sum = _mod14425.repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
    }
    if ("negative" !== str2) {
      const obj = { roundedNumber, formattedString: sum };
      return obj;
    } else if (roundedNumber.isZero()) {
      tmp5Result = TEN;
      let NEGATIVE_ZERO = tmp5Result.NEGATIVE_ZERO;
    } else {
      NEGATIVE_ZERO = roundedNumber.negated();
    }
  }
  _mod14425.invariant(timesResult.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
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
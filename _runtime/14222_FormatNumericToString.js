// _runtime/14222_FormatNumericToString.js
import TEN from "14208_TEN.js";

const _mod14206 = tmp5(14206);
const GetUnsignedRoundingMode = tmp5(14223);
const ToRawPrecision = tmp5(14224);
const ToRawFixed = tmp5(14225);
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
      let ToRawPrecisionResult = ToRawPrecision.ToRawPrecision(
        ZERO,
        roundingType.minimumSignificantDigits,
        roundingType.maximumSignificantDigits,
        result,
      );
    } else if ("fractionDigits" === roundingType) {
      ToRawPrecisionResult = ToRawFixed.ToRawFixed(
        ZERO,
        roundingType.minimumFractionDigits,
        roundingType.maximumFractionDigits,
        roundingType.roundingIncrement,
        result,
      );
    } else {
      const ToRawPrecisionResult1 = ToRawPrecision.ToRawPrecision(
        ZERO,
        roundingType.minimumSignificantDigits,
        roundingType.maximumSignificantDigits,
        result,
      );
      let ToRawFixedResult = ToRawFixed.ToRawFixed(
        ZERO,
        roundingType.minimumFractionDigits,
        roundingType.maximumFractionDigits,
        roundingType.roundingIncrement,
        result,
      );
      if ("morePrecision" === roundingType.roundingType) {
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawFixedResult = ToRawPrecisionResult1;
        }
        ToRawPrecisionResult = ToRawFixedResult;
      } else {
        _mod14206.invariant("lessPrecision" === roundingType.roundingType, "Invalid roundingType");
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
      sum = _mod14206.repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
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
  _mod14206.invariant(timesResult.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
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

// _runtime/14004_FormatNumericToString.js
import TEN from "13990_TEN.js";

let tmp5;
const UNICODE_EXTENSION_SEQUENCE_REGEX = tmp5(13988);
const GetUnsignedRoundingMode = tmp5(14005);
const ToRawPrecision = tmp5(14006);
const ToRawFixed = tmp5(14007);

export const FormatNumericToString = function FormatNumericToString(roundingType, timesResult) {
  let ZERO;
  let formattedString;
  let roundedNumber;
  let str2;
  if (timesResult.isZero()) {
    let ToRawPrecisionResult;
    if (timesResult.isNegative()) {
      ZERO = TEN.ZERO;
      str2 = "negative";
    }
    roundingType = roundingType.roundingType;
    const result = GetUnsignedRoundingMode.GetUnsignedRoundingMode(roundingType.roundingMode, tmp9);
    if ("significantDigits" === roundingType) {
      ToRawPrecisionResult = ToRawPrecision.ToRawPrecision(
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
        UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(
          "lessPrecision" === roundingType.roundingType,
          "Invalid roundingType",
        );
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
      sum = UNICODE_EXTENSION_SEQUENCE_REGEX.repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
    }
    let tmp22 = roundedNumber;
    if ("negative" === str2) {
      let NEGATIVE_ZERO;
      if (roundedNumber.isZero()) {
        NEGATIVE_ZERO = TEN.NEGATIVE_ZERO;
      } else {
        NEGATIVE_ZERO = roundedNumber.negated();
      }
      tmp22 = NEGATIVE_ZERO;
    }
    return { roundedNumber: tmp22, formattedString: sum };
  }
  UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(
    timesResult.isFinite(),
    "NumberFormatDigitInternalSlots value is not finite",
  );
  let str = "positive";
  if (timesResult.lessThan(0)) {
    str = "negative";
  }
  ZERO = timesResult;
  str2 = str;
  if ("negative" === str) {
    ZERO = timesResult.negated();
    str2 = str;
  }
};

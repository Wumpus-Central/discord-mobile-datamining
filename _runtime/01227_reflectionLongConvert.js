// === Module 1227: reflectionLongConvert ===

// Module 1227 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1222 */;

require = arg1;
const dependencyMap = arg6;

export const reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
};
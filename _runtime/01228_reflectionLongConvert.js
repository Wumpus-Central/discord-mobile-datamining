// === Module 1228: reflectionLongConvert ===

// Module 1228 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1223 */;

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
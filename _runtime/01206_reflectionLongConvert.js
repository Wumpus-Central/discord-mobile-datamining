// === Module 1206: reflectionLongConvert ===

// Module 1206 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1201 */;

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
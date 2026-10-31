// === Module 1215: reflectionLongConvert ===

// Module 1215 (reflectionLongConvert)
import ScalarType from "ScalarType" /* 1210 */;

require = arg1;
const dependencyMap = arg6;

export function reflectionLongConvert(ZERO, STRING) {
  if (ScalarType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (ScalarType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
}
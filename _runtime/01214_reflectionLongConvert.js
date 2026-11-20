// _runtime/01214_reflectionLongConvert.js
import ScalarType from "01209_ScalarType.js";

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

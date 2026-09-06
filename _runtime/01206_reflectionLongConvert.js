// _runtime/01206_reflectionLongConvert.js
import ScalarType from "01201_ScalarType.js";

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

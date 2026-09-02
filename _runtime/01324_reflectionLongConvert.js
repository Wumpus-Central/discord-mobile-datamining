// === Module 1324: reflectionLongConvert ===

// Module 1324 (reflectionLongConvert)
import RepeatType from "RepeatType" /* 1319 */;

require = arg1;
const dependencyMap = arg6;
arg5.reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (RepeatType.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (RepeatType.LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
  const tmp = require;
};
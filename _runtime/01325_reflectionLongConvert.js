const require = arg1;
const dependencyMap = arg6;
arg5.reflectionLongConvert = function reflectionLongConvert(ZERO, STRING) {
  if (require(1320) /* RepeatType */.LongType.BIGINT === STRING) {
    return ZERO.toBigInt();
  } else if (tmp(1320).LongType.NUMBER === STRING) {
    return ZERO.toNumber();
  } else {
    return ZERO.toString();
  }
  tmp = require;
};
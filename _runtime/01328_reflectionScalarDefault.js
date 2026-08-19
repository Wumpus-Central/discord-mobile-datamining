// _runtime/01328_reflectionScalarDefault.js
import _isNativeReflectConstruct from "01314__isNativeReflectConstruct.js";
import RepeatType from "01320_RepeatType.js";
import reflectionLongConvert from "01325_reflectionLongConvert.js";

require = arg1;
const dependencyMap = arg6;
arg5.reflectionScalarDefault = function reflectionScalarDefault(T, L) {
  let STRING = L;
  if (L === undefined) {
    STRING = RepeatType.LongType.STRING;
  }
  if (RepeatType.ScalarType.BOOL === T) {
    return false;
  } else {
    if (RepeatType.ScalarType.UINT64 !== T) {
      if (RepeatType.ScalarType.FIXED64 !== T) {
        if (RepeatType.ScalarType.INT64 !== T) {
          if (RepeatType.ScalarType.SFIXED64 !== T) {
            if (RepeatType.ScalarType.SINT64 !== T) {
              if (RepeatType.ScalarType.DOUBLE !== T) {
                if (RepeatType.ScalarType.FLOAT !== T) {
                  if (RepeatType.ScalarType.BYTES === T) {
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(0);
                    return uint8Array;
                  } else if (RepeatType.ScalarType.STRING === T) {
                    return "";
                  } else {
                    return 0;
                  }
                }
              }
              return 0;
            }
          }
        }
        let tmp3Result = reflectionLongConvert;
        return tmp3Result.reflectionLongConvert(_isNativeReflectConstruct.PbLong.ZERO, STRING);
      }
    }
    tmp3Result = reflectionLongConvert;
    return tmp3Result.reflectionLongConvert(_isNativeReflectConstruct.PbULong.ZERO, STRING);
  }
};
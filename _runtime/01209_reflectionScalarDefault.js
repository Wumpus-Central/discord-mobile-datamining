// _runtime/01209_reflectionScalarDefault.js
import RepeatType from "01201_RepeatType.js";

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
    if (tmp3(1201).ScalarType.UINT64 !== T) {
      if (tmp3(1201).ScalarType.FIXED64 !== T) {
        if (tmp3(1201).ScalarType.INT64 !== T) {
          if (tmp3(1201).ScalarType.SFIXED64 !== T) {
            if (tmp3(1201).ScalarType.SINT64 !== T) {
              if (tmp3(1201).ScalarType.DOUBLE !== T) {
                if (tmp3(1201).ScalarType.FLOAT !== T) {
                  if (tmp3(1201).ScalarType.BYTES === T) {
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(0);
                    return uint8Array;
                  } else if (tmp3(1201).ScalarType.STRING === T) {
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
        let tmp3Result = tmp3(1206);
        return tmp3Result.reflectionLongConvert(tmp3(1195).PbLong.ZERO, STRING);
      }
    }
    tmp3Result = tmp3(1206);
    return tmp3Result.reflectionLongConvert(tmp3(1195).PbULong.ZERO, STRING);
  }
};

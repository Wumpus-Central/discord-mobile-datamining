// === Module 1328: reflectionScalarDefault ===

// Module 1328 (reflectionScalarDefault)
const require = arg1;
const dependencyMap = arg6;
arg5.reflectionScalarDefault = function reflectionScalarDefault(T, L) {
  let STRING = L;
  if (L === undefined) {
    STRING = require(1320) /* RepeatType */.LongType.STRING;
  }
  if (require(1320) /* RepeatType */.ScalarType.BOOL === T) {
    return false;
  } else {
    if (tmp3(1320).ScalarType.UINT64 !== T) {
      if (tmp3(1320).ScalarType.FIXED64 !== T) {
        if (tmp3(1320).ScalarType.INT64 !== T) {
          if (tmp3(1320).ScalarType.SFIXED64 !== T) {
            if (tmp3(1320).ScalarType.SINT64 !== T) {
              if (tmp3(1320).ScalarType.DOUBLE !== T) {
                if (tmp3(1320).ScalarType.FLOAT !== T) {
                  if (tmp3(1320).ScalarType.BYTES === T) {
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(0);
                    return uint8Array;
                  } else if (tmp3(1320).ScalarType.STRING === T) {
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
        let tmp3Result = tmp3(1325);
        return tmp3Result.reflectionLongConvert(tmp3(1314).PbLong.ZERO, STRING);
      }
    }
    tmp3Result = tmp3(1325);
    return tmp3Result.reflectionLongConvert(tmp3(1314).PbULong.ZERO, STRING);
  }
};
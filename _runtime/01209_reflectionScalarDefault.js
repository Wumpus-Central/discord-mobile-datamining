// === Module 1209: reflectionScalarDefault ===

// Module 1209 (reflectionScalarDefault)
import _mod1195 from "module_1195" /* 1195 */;
import ScalarType from "ScalarType" /* 1201 */;
import reflectionLongConvert from "reflectionLongConvert" /* 1206 */;

require = arg1;
const dependencyMap = arg6;

export const reflectionScalarDefault = function reflectionScalarDefault(T) {
  let STRING = L;
  if (L === undefined) {
    STRING = ScalarType.LongType.STRING;
  }
  if (ScalarType.ScalarType.BOOL === T) {
    return false;
  } else {
    if (ScalarType.ScalarType.UINT64 !== T) {
      if (ScalarType.ScalarType.FIXED64 !== T) {
        if (ScalarType.ScalarType.INT64 !== T) {
          if (ScalarType.ScalarType.SFIXED64 !== T) {
            if (ScalarType.ScalarType.SINT64 !== T) {
              if (ScalarType.ScalarType.DOUBLE !== T) {
                if (ScalarType.ScalarType.FLOAT !== T) {
                  if (ScalarType.ScalarType.BYTES === T) {
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(0);
                    return uint8Array;
                  } else if (ScalarType.ScalarType.STRING === T) {
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
        return tmp3Result.reflectionLongConvert(_mod1195.PbLong.ZERO, STRING);
      }
    }
    tmp3Result = reflectionLongConvert;
    return tmp3Result.reflectionLongConvert(_mod1195.PbULong.ZERO, STRING);
  }
};
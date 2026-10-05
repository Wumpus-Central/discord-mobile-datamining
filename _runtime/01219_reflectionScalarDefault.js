// === Module 1219: reflectionScalarDefault ===

// Module 1219 (reflectionScalarDefault)
import PbULong from "PbULong" /* 1205 */;
import ScalarType from "ScalarType" /* 1211 */;
import reflectionLongConvert from "reflectionLongConvert" /* 1216 */;


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
                    const self = this;
                    const self2 = this;
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
        const tmp3Result = reflectionLongConvert;
        return tmp3Result.reflectionLongConvert(PbULong.PbLong.ZERO, STRING);
      }
    }
    const tmp3Result2 = reflectionLongConvert;
    return tmp3Result2.reflectionLongConvert(PbULong.PbULong.ZERO, STRING);
  }
};
// _runtime/01208_reflectionScalarDefault.js
import _mod1194 from "metro/01194__.js";
import ScalarType from "01200_ScalarType.js";
import reflectionLongConvert from "01205_reflectionLongConvert.js";

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
        return reflectionLongConvert.reflectionLongConvert(_mod1194.PbLong.ZERO, STRING);
      }
    }
    return reflectionLongConvert.reflectionLongConvert(_mod1194.PbULong.ZERO, STRING);
  }
};

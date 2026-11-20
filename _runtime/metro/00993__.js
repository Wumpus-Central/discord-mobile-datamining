// _runtime/metro/00993__.js
import encodeUTF8 from "../00869_encodeUTF8.js";

require = arg1;
const dependencyMap = arg6;

export function parseContentLengthHeader(responseHeader) {
  if (responseHeader) {
    const _parseInt = parseInt;
    const parsed = parseInt(responseHeader, 10);
    const _isNaN = isNaN;
    let tmp3;
    if (!isNaN(parsed)) {
      tmp3 = parsed;
    }
    return tmp3;
  }
}
export function getBodySize(input) {
  if (input) {
    try {
      if (typeof input === "string") {
        return encodeUTF8.encodeUTF8(input).length;
      } else {
        const _URLSearchParams = URLSearchParams;
        if (input instanceof URLSearchParams) {
          return encodeUTF8.encodeUTF8(input.toString()).length;
        } else {
          const _FormData = FormData;
          if (input instanceof FormData) {
            const tmp = (function _serializeFormData(input) {
              return new URLSearchParams(input).toString();
            })(input);
            return encodeUTF8.encodeUTF8(tmp).length;
          } else {
            const _Blob = Blob;
            if (input instanceof Blob) {
              return input.size;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              if (input instanceof ArrayBuffer) {
                return input.byteLength;
              }
            }
          }
        }
      }
    } catch (err) {}
  }
}

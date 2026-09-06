// _runtime/metro/00997__.js
import encodeUTF8 from "../00869_encodeUTF8.js";

require = arg1;
const dependencyMap = arg6;

export const parseContentLengthHeader = function parseContentLengthHeader(responseHeader) {
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
};
export const getBodySize = function getBodySize(size) {
  if (size) {
    try {
      if (typeof size === "string") {
        return encodeUTF8.encodeUTF8(size).length;
      } else {
        const _URLSearchParams = URLSearchParams;
        if (size instanceof URLSearchParams) {
          return encodeUTF8.encodeUTF8(size.toString()).length;
        } else {
          const _FormData = FormData;
          if (size instanceof FormData) {
            const tmp = (function _serializeFormData(size) {
              return new URLSearchParams(size).toString();
            })(size);
            return encodeUTF8.encodeUTF8(tmp).length;
          } else {
            const _Blob = Blob;
            if (size instanceof Blob) {
              return size.size;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              if (size instanceof ArrayBuffer) {
                return size.byteLength;
              }
            }
          }
        }
      }
    } catch (err) {}
  }
};

// _runtime/metro/01008__.js
import encodeUTF8 from "../00880_encodeUTF8.js";

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
  function _serializeFormData(size) {
    const str = new URLSearchParams(size);
    return str.toString();
  }
  const tmp = size;
  if (tmp) {
    try {
      if (typeof size === "string") {
        const obj3 = encodeUTF8;
        return obj3.encodeUTF8(size).length;
      } else {
        const _URLSearchParams = URLSearchParams;
        if (size instanceof URLSearchParams) {
          const obj2 = encodeUTF8;
          return obj2.encodeUTF8(size.toString()).length;
        } else {
          const _FormData = FormData;
          if (size instanceof FormData) {
            const tmp2 = _serializeFormData(size);
            const obj = encodeUTF8;
            return obj.encodeUTF8(tmp2).length;
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

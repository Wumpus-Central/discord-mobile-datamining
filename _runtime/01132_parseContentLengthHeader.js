// === Module 1132: parseContentLengthHeader ===

// Module 1132 (parseContentLengthHeader)
import encodeUTF8 from "encodeUTF8" /* 1004 */;

require = arg1;
const dependencyMap = arg6;
arg5.parseContentLengthHeader = function parseContentLengthHeader(responseHeader) {
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
arg5.getBodySize = function getBodySize(size) {
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
    } catch (err) {
    }
  }
};
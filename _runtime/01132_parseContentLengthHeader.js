// _runtime/01132_parseContentLengthHeader.js
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
arg5.getBodySize = function getBodySize(json) {
  if (json) {
    try {
      if (typeof json === "string") {
        return encodeUTF8.encodeUTF8(json).length;
      } else {
        const _URLSearchParams = URLSearchParams;
        if (json instanceof URLSearchParams) {
          return encodeUTF8.encodeUTF8(json.toString()).length;
        } else {
          const _FormData = FormData;
          if (json instanceof FormData) {
            const tmp = (function _serializeFormData(json) {
              return new URLSearchParams(json).toString();
            })(json);
            return encodeUTF8.encodeUTF8(tmp).length;
          } else {
            const _Blob = Blob;
            if (json instanceof Blob) {
              return json.size;
            } else {
              const _ArrayBuffer = ArrayBuffer;
              if (json instanceof ArrayBuffer) {
                return json.byteLength;
              }
            }
          }
        }
      }
    } catch (err) {
    }
  }
};
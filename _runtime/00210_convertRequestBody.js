// _runtime/00210_convertRequestBody.js
import Blob from "Blob" /* 203 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = function convertRequestBody(str) {
  if (typeof str === "string") {
    let obj = { string: null };
    obj[0] = str;
    let tmp2 = obj;
  } else if (str instanceof Blob.default) {
    obj = { blob: null };
    obj[0] = str.data;
    tmp2 = obj;
  } else if (str instanceof tmp3(211).default) {
    obj1 = { formData: null };
    obj1[0] = str.getParts();
    tmp2 = obj1;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (str instanceof ArrayBuffer) {
      obj = { base64: null };
      obj[0] = tmp3(212).default(str);
      tmp2 = obj;
      const tmp3Result = tmp3(212);
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      tmp2 = str;
    }
  }
  return tmp2;
};
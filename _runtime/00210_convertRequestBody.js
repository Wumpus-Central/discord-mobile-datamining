// === Module 210: convertRequestBody ===

// Module 210 (convertRequestBody)
import Blob from "Blob" /* 203 */;
import FormData from "FormData" /* 211 */;
import binaryToBase64 from "binaryToBase64" /* 212 */;

require = arg1;
const dependencyMap = arg6;
arg5.default = function convertRequestBody(data) {
  if (typeof data === "string") {
    let obj = { string: null };
    obj[0] = data;
    let tmp2 = obj;
  } else if (data instanceof Blob.default) {
    obj = { blob: null };
    obj[0] = data.data;
    tmp2 = obj;
  } else if (data instanceof FormData.default) {
    obj1 = { formData: null };
    obj1[0] = data.getParts();
    tmp2 = obj1;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (data instanceof ArrayBuffer) {
      obj = { base64: null };
      obj[0] = binaryToBase64.default(data);
      tmp2 = obj;
      const tmp3Result = binaryToBase64;
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      tmp2 = data;
    }
  }
  return tmp2;
};
// _runtime/00210_convertRequestBody.js
import Blob from "00203_Blob.js";
import FormData from "00211_FormData.js";
import binaryToBase64 from "00212_binaryToBase64.js";

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
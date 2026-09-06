// === Module 210: convertRequestBody ===

// Module 210 (convertRequestBody)
import Blob from "Blob" /* 203 */;
import FormData from "FormData" /* 211 */;
import binaryToBase64 from "binaryToBase64" /* 212 */;

require = arg1;
const dependencyMap = arg6;

export default function convertRequestBody(string) {
  if (typeof string === "string") {
    let obj = { string };
    let tmp2 = obj;
  } else if (string instanceof Blob.default) {
    obj = { blob: string.data };
    tmp2 = obj;
  } else if (string instanceof FormData.default) {
    const obj1 = { formData: string.getParts() };
    tmp2 = obj1;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (string instanceof ArrayBuffer) {
      obj = { base64: binaryToBase64.default(string) };
      tmp2 = obj;
      const tmp3Result = binaryToBase64;
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      tmp2 = string;
    }
  }
  return tmp2;
};
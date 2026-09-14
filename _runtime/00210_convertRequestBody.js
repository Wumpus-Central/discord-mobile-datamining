// _runtime/00210_convertRequestBody.js
import Blob from "00203_Blob.js";
import FormData from "00211_FormData.js";
import binaryToBase64 from "00212_binaryToBase64.js";

require = arg1;
const dependencyMap = arg6;

export default function convertRequestBody(string) {
  if (typeof string === "string") {
    const obj2 = { string };
    let tmp2 = obj2;
  } else if (string instanceof Blob.default) {
    const obj3 = { blob: string.data };
    tmp2 = obj3;
  } else if (string instanceof FormData.default) {
    const obj4 = { formData: string.getParts() };
    tmp2 = obj4;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (string instanceof ArrayBuffer) {
      const obj = { base64: binaryToBase64.default(string) };
      tmp2 = obj;
      const tmp3Result = binaryToBase64;
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      tmp2 = string;
    }
  }
  return tmp2;
}

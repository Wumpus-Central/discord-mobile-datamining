// === Module 210: convertRequestBody ===

// Module 210 (convertRequestBody)
import _mod203 from "module_203" /* 203 */;
import _mod211 from "module_211" /* 211 */;
import binaryToBase64 from "binaryToBase64" /* 212 */;


export default function convertRequestBody(string) {
  let tmp2;
  let tmp3Result;
  if (typeof string === "string") {
    tmp2 = { string };
    const obj2 = { string };
  } else if (string instanceof _mod203.default) {
    tmp2 = { blob: string.data };
    const obj3 = { blob: string.data };
  } else if (string instanceof _mod211.default) {
    tmp2 = { formData: string.getParts() };
    const obj4 = { formData: string.getParts() };
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (string instanceof ArrayBuffer) {
      const obj = { base64: tmp3Result.default(string) };
      tmp2 = obj;
      tmp3Result = binaryToBase64;
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      tmp2 = string;
    }
  }
  return tmp2;
};
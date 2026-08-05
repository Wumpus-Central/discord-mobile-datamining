// _runtime/00212_binaryToBase64.js
import { byteLength } from "00206_byteLength.js";
const require = arg1;
const dependencyMap = arg6;
arg5.default = function binaryToBase64(arg0) {
  let byteLength;
  let byteOffset;
  let uint8Array = arg0;
  if (arg0 instanceof ArrayBuffer) {
    const _Uint8Array = Uint8Array;
    uint8Array = new Uint8Array(arg0);
  }
  if (uint8Array instanceof Uint8Array) {
    return byteLength /* byteLength */.fromByteArray(uint8Array);
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (ArrayBuffer.isView(uint8Array)) {
      const buffer = uint8Array.buffer;
      ({ byteOffset, byteLength } = uint8Array);
      const _Uint8Array2 = Uint8Array;
      const uint8Array1 = new Uint8Array(buffer, byteOffset, byteLength);
      return byteLength /* byteLength */.fromByteArray(uint8Array1);
    } else {
      const _Error = Error;
      const error = new Error("data must be ArrayBuffer or typed array");
      throw error;
    }
  }
};
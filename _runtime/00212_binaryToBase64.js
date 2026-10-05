// === Module 212: binaryToBase64 ===

// Module 212 (binaryToBase64)
import byteLength from "byteLength" /* 206 */;


export default function binaryToBase64(string) {
  let byteLength;
  let byteOffset;
  let uint8Array = string;
  if (string instanceof ArrayBuffer) {
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    uint8Array = new Uint8Array(string);
  }
  if (uint8Array instanceof Uint8Array) {
    const obj = byteLength;
    return obj.fromByteArray(uint8Array);
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (ArrayBuffer.isView(uint8Array)) {
      const buffer = uint8Array.buffer;
      ({ byteOffset, byteLength } = uint8Array);
      const _Uint8Array2 = Uint8Array;
      const self5 = this;
      const self6 = this;
      const fromByteArray = byteLength.fromByteArray;
      byteLength;
      const uint8Array1 = new Uint8Array(buffer, byteOffset, byteLength);
      return fromByteArray(uint8Array1);
    } else {
      const _Error = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("data must be ArrayBuffer or typed array");
      throw error;
    }
  }
};
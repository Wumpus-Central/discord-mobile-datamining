// _runtime/04388_cloneTypedArray.js
import { cloneArrayBuffer } from "04386_cloneArrayBuffer.js";

export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
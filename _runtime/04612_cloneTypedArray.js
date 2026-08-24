// === Module 4612: cloneTypedArray ===

// Module 4612 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4610 */;


export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
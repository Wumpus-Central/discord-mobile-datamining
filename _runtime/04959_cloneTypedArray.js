// === Module 4959: cloneTypedArray ===

// Module 4959 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4957 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
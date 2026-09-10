// === Module 4698: cloneTypedArray ===

// Module 4698 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4696 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
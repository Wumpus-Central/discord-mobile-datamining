// === Module 4653: cloneTypedArray ===

// Module 4653 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4651 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
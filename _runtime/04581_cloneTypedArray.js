// === Module 4581: cloneTypedArray ===

// Module 4581 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4579 */;


export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
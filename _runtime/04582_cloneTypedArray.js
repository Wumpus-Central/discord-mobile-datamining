// === Module 4582: cloneTypedArray ===

// Module 4582 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4580 */;


export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
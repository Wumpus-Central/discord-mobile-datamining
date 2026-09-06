// === Module 4652: cloneDataView ===

// Module 4652 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4651 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
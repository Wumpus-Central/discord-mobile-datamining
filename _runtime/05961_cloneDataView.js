// === Module 5961: cloneDataView ===

// Module 5961 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 5960 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
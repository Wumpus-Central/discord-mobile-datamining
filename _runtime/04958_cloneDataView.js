// === Module 4958: cloneDataView ===

// Module 4958 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4957 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
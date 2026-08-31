// === Module 4584: cloneDataView ===

// Module 4584 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4583 */;


export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
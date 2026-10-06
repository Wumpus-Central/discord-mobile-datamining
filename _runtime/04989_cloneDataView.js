// === Module 4989: cloneDataView ===

// Module 4989 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4988 */;


export default function cloneDataView(buffer, arg1) {
  const tmp = arg1;
  if (tmp) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
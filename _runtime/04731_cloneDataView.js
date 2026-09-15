// _runtime/04731_cloneDataView.js
import cloneArrayBuffer from "04730_cloneArrayBuffer.js";

export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
}

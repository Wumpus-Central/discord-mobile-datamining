// _runtime/04476_cloneDataView.js
import { cloneArrayBuffer } from "04475_cloneArrayBuffer.js";

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
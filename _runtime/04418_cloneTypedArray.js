import { cloneArrayBuffer } from "04416_cloneArrayBuffer.js";
// _runtime/04418_cloneTypedArray.js

export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = cloneArrayBuffer /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
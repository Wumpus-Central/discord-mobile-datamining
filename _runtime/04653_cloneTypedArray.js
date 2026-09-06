// _runtime/04653_cloneTypedArray.js
import cloneArrayBuffer from "04651_cloneArrayBuffer.js";

export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
}

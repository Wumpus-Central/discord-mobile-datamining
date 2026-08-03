// === Module 4327: cloneTypedArray ===

// Module 4327 (cloneTypedArray)

export default function cloneTypedArray(buffer) {
  if (arg1) {
    buffer = require(4325) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
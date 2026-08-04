// _runtime/04326_cloneDataView.js

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require(4325) /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
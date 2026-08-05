// _runtime/04417_cloneDataView.js

export default function cloneDataView(buffer) {
  if (arg1) {
    buffer = require("04416_cloneArrayBuffer.js") /* cloneArrayBuffer */(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
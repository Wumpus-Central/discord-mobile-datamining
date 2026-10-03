// _runtime/04982_cloneArrayBuffer.js
import _mod663 from "metro/00663__.js";

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod663(constructor);
  const result = obj.set(new _mod663(byteLength));
  return constructor;
}

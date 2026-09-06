// _runtime/04651_cloneArrayBuffer.js
import _mod652 from "metro/00652__.js";

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod652(constructor);
  const result = obj.set(new _mod652(byteLength));
  return constructor;
}

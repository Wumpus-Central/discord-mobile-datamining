// _runtime/04615_cloneArrayBuffer.js
import _mod785 from "metro/00785__.js";

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod785(constructor);
  const result = obj.set(new _mod785(byteLength));
  return constructor;
}

// _runtime/05821_cloneArrayBuffer.js
import _mod651 from "metro/00651__.js";

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod651(constructor);
  const result = obj.set(new _mod651(byteLength));
  return constructor;
}

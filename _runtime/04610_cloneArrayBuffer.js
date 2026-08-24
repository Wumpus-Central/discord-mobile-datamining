// _runtime/04610_cloneArrayBuffer.js
import _mod788 from "metro/00788__.js";


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod788(constructor);
  const result = obj.set(new _mod788(byteLength));
  return constructor;
};
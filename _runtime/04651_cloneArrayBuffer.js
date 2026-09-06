// === Module 4651: cloneArrayBuffer ===

// Module 4651 (cloneArrayBuffer)
import _mod652 from "module_652" /* 652 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod652(constructor);
  const result = obj.set(new _mod652(byteLength));
  return constructor;
};
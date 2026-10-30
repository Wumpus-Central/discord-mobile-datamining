// === Module 5821: cloneArrayBuffer ===

// Module 5821 (cloneArrayBuffer)
import _mod651 from "module_651" /* 651 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod651(constructor);
  const result = obj.set(new _mod651(byteLength));
  return constructor;
};
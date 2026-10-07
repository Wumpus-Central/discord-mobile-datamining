// === Module 4988: cloneArrayBuffer ===

// Module 4988 (cloneArrayBuffer)
import _mod663 from "module_663" /* 663 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod663(constructor);
  const result = obj.set(new _mod663(byteLength));
  return constructor;
};
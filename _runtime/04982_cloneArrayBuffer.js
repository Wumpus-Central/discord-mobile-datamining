// === Module 4982: cloneArrayBuffer ===

// Module 4982 (cloneArrayBuffer)
import _mod663 from "module_663" /* 663 */;

let set;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  set = new _mod663(constructor).set;
  const tmp3 = new _mod663(byteLength);
  const result = set(tmp3);
  return constructor;
};
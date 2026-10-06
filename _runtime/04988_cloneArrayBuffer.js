// _runtime/04988_cloneArrayBuffer.js
import _mod663 from "metro/00663__.js";

let set;

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  set = new _mod663(constructor).set;
  const tmp3 = new _mod663(byteLength);
  const result = set(tmp3);
  return constructor;
}

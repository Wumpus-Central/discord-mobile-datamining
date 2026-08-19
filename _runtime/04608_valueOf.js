// === Module 4608: valueOf ===

// Module 4608 (valueOf)
import _mod608 from "module_608" /* 608 */;

let prototype;
if (_mod608) {
  prototype = _mod608.prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function cloneSymbol(arg0) {
  if (valueOf) {
    const call = valueOf.call;
    Object(typeof call === "unknown" ? valueOf() : call(arg0));
  } else {
    return {};
  }
};
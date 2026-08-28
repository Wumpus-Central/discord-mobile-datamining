// === Module 4585: valueOf ===

// Module 4585 (valueOf)
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
    const call = tmp.call;
    Object(typeof call === "unknown" ? tmp() : call(arg0));
  } else {
    return {};
  }
};
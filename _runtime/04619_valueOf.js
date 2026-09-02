// === Module 4619: valueOf ===

// Module 4619 (valueOf)
import _mod605 from "module_605" /* 605 */;

let prototype;
if (_mod605) {
  prototype = _mod605.prototype;
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
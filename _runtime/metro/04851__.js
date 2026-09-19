// === Module 4851: ? ===

// Module 4851
import _mod523 from "module_523" /* 523 */;

let prototype;
if (_mod523) {
  prototype = _mod523.prototype;
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
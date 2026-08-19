// _runtime/04608_valueOf.js
import _mod608 from "metro/00608__.js";

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
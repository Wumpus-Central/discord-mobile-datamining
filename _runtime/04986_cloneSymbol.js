// === Module 4986: cloneSymbol ===

// Module 4986 (cloneSymbol)
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
  let ObjectResult;
  if (valueOf) {
    ObjectResult = Object(valueOf.call(arg0));
  } else {
    ObjectResult = {};
  }
  return ObjectResult;
};
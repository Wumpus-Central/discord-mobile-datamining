// _runtime/00545_isPrototype.js
let closure_0 = Object.prototype;

export default function isPrototype(arg0) {
  let prototype = typeof tmp === "function";
  if (typeof arg0 && arg0.constructor === "function") {
    prototype = tmp.prototype;
  }
  if (!prototype) {
    prototype = closure_0;
  }
  return arg0 === prototype;
}

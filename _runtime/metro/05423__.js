// === Module 5423: ? ===

// Module 5423
import _mod5424 from "module_5424" /* 5424 */;


export default function _inherits(value, fn) {
  if (typeof fn !== "function") {
    if (null !== fn) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Super expression must either be null or a function");
      throw typeError;
    }
  }
  let prototype = fn;
  if (fn) {
    prototype = fn.prototype;
  }
  value.prototype = Object.create(prototype, { constructor: { value, writable: true, configurable: true } });
  Object.defineProperty(value, "prototype", { writable: false });
  if (fn) {
    _mod5424(value, fn);
  }
  const obj = { constructor: { value, writable: true, configurable: true } };
};
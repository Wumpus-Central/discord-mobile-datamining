// === Module 5419: ? ===

// Module 5419
import _mod5420 from "module_5420" /* 5420 */;


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
    _mod5420(value, fn);
  }
  const obj = { constructor: { value, writable: true, configurable: true } };
};
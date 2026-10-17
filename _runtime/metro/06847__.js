// === Module 6847: ? ===

// Module 6847
import _mod6848 from "module_6848" /* 6848 */;


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
    _mod6848(value, fn);
  }
  const obj = { constructor: { value, writable: true, configurable: true } };
};
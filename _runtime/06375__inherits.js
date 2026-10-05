// _runtime/06375__inherits.js
import _setPrototypeOf from "06376__setPrototypeOf.js";

export default function _inherits(value, fn) {
  if (typeof fn !== "function") {
    if (null !== fn) {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Super expression must either be null or a function");
      throw typeError;
    }
  }
  let prototype = fn;
  const _Object = Object;
  if (fn) {
    prototype = fn.prototype;
  }
  const obj = { constructor: { value, writable: true, configurable: true } };
  value.prototype = create(prototype, obj);
  Object.defineProperty(value, "prototype", { writable: false });
  if (fn) {
    _setPrototypeOf(value, fn);
  }
}

// === Module 93: _possibleConstructorReturn ===

// Module 93 (_possibleConstructorReturn)
import _mod45 from "module_45" /* 45 */;
import _assertThisInitialized from "_assertThisInitialized" /* 94 */;


export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    _mod45;
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return _assertThisInitialized(arg0);
  }
};
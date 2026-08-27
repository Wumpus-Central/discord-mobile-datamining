// === Module 5834: _possibleConstructorReturn ===

// Module 5834 (_possibleConstructorReturn)
import _assertThisInitialized from "_assertThisInitialized" /* 5835 */;


export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
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
// === Module 7069: _possibleConstructorReturn ===

// Module 7069 (_possibleConstructorReturn)
import _typeof from "_typeof" /* 7054 */;
import _assertThisInitialized from "_assertThisInitialized" /* 7070 */;


export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    _typeof;
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
import { _assertThisInitialized } from "../05540__assertThisInitialized.js";
// _runtime/metro/05539__possibleConstructorReturn.js

export default function _possibleConstructorReturn(arg0, fn) {
  if (fn) {
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return _assertThisInitialized /* _assertThisInitialized */(arg0);
  }
};
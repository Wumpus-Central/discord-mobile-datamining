// _runtime/metro/07069__possibleConstructorReturn.js
import _typeof from "07054__typeof.js";
import _assertThisInitialized from "../07070__assertThisInitialized.js";


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
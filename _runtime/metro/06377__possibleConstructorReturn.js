// _runtime/metro/06377__possibleConstructorReturn.js
import _typeof from "06362__typeof.js";
import _assertThisInitialized from "../06378__assertThisInitialized.js";

export default function _possibleConstructorReturn(arg0, fn) {
  const tmp = fn;
  if (tmp) {
    _typeof;
    return fn;
  }
  if (undefined !== fn) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Derived constructors may only return object or undefined");
    throw typeError;
  } else {
    return _assertThisInitialized(arg0);
  }
}

// === Module 543: getProto ===

// Module 543 (getProto)
import getPrototypeOf from "getPrototypeOf" /* 544 */;
import _mod545 from "module_545" /* 545 */;
import _mod547 from "module_547" /* 547 */;

if (getPrototypeOf) {
  function getProto(arg0) {
    return getPrototypeOf(arg0);
  }
} else if (_mod545) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod545(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod547) {
    getProto = function getProto(arg0) {
      return _mod547(arg0);
    };
  }
}

export default getProto;
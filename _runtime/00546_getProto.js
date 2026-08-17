// _runtime/00546_getProto.js
import getPrototypeOf from "getPrototypeOf" /* 547 */;
import _mod548 from "module_548" /* 548 */;
import _mod550 from "module_550" /* 550 */;

if (getPrototypeOf) {
  function getProto(arg0) {
    return getPrototypeOf(arg0);
  }
} else if (_mod548) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod548(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod550) {
    getProto = function getProto(arg0) {
      return _mod550(arg0);
    };
  }
}

export default getProto;
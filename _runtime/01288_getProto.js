// === Module 1288: getProto ===

// Module 1288 (getProto)
import getPrototypeOf from "getPrototypeOf" /* 1289 */;
import _mod1290 from "module_1290" /* 1290 */;
import _mod1292 from "module_1292" /* 1292 */;

if (getPrototypeOf) {
  function getProto(arg0) {
    return getPrototypeOf(arg0);
  }
} else if (_mod1290) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1290(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1292) {
    getProto = function getProto(arg0) {
      return _mod1292(arg0);
    };
  }
}

export default getProto;
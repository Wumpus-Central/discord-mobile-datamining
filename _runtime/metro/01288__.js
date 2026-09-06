// === Module 1288: ? ===

// Module 1288
import _mod1289 from "module_1289" /* 1289 */;
import _mod1290 from "module_1290" /* 1290 */;
import _mod1292 from "module_1292" /* 1292 */;

if (_mod1289) {
  function getProto(arg0) {
    return _mod1289(arg0);
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
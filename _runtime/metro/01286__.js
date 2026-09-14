// === Module 1286: ? ===

// Module 1286
import _mod1287 from "module_1287" /* 1287 */;
import _mod1288 from "module_1288" /* 1288 */;
import _mod1290 from "module_1290" /* 1290 */;

if (_mod1287) {
  function getProto(arg0) {
    return _mod1287(arg0);
  }
} else if (_mod1288) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1288(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1290) {
    getProto = function getProto(arg0) {
      return _mod1290(arg0);
    };
  }
}

export default getProto;
// === Module 1311: ? ===

// Module 1311
import _mod1312 from "module_1312" /* 1312 */;
import _mod1313 from "module_1313" /* 1313 */;
import _mod1315 from "module_1315" /* 1315 */;

if (_mod1312) {
  function getProto(arg0) {
    return _mod1312(arg0);
  }
} else if (_mod1313) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1313(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1315) {
    getProto = function getProto(arg0) {
      return _mod1315(arg0);
    };
  }
}

export default getProto;
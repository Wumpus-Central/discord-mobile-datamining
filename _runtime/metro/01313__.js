// === Module 1313: ? ===

// Module 1313
import _mod1314 from "module_1314" /* 1314 */;
import _mod1315 from "module_1315" /* 1315 */;
import _mod1317 from "module_1317" /* 1317 */;

if (_mod1314) {
  function getProto(arg0) {
    return _mod1314(arg0);
  }
} else if (_mod1315) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1315(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1317) {
    getProto = function getProto(arg0) {
      return _mod1317(arg0);
    };
  }
}

export default getProto;
// === Module 1300: ? ===

// Module 1300
import _mod1301 from "module_1301" /* 1301 */;
import _mod1302 from "module_1302" /* 1302 */;
import _mod1304 from "module_1304" /* 1304 */;

if (_mod1301) {
  function getProto(arg0) {
    return _mod1301(arg0);
  }
} else if (_mod1302) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1302(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1304) {
    getProto = function getProto(arg0) {
      return _mod1304(arg0);
    };
  }
}

export default getProto;
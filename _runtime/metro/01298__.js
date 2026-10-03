// === Module 1298: ? ===

// Module 1298
import _mod1299 from "module_1299" /* 1299 */;
import _mod1300 from "module_1300" /* 1300 */;
import _mod1302 from "module_1302" /* 1302 */;

if (_mod1299) {
  function getProto(arg0) {
    return _mod1299(arg0);
  }
} else if (_mod1300) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1300(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1302) {
    getProto = function getProto(arg0) {
      return _mod1302(arg0);
    };
  }
}

export default getProto;
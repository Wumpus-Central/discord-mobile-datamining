// === Module 5047: ? ===

// Module 5047
import _mod1282 from "module_1282" /* 1282 */;
import _mod5048 from "module_5048" /* 5048 */;
import _mod5049 from "module_5049" /* 5049 */;
import _mod5050 from "module_5050" /* 5050 */;

if (_mod5048) {
  function setProto(arg0, arg1) {
    if (_mod5048(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5049;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5050) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5050(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
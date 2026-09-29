// === Module 5307: ? ===

// Module 5307
import _mod1282 from "module_1282" /* 1282 */;
import _mod5308 from "module_5308" /* 5308 */;
import _mod5309 from "module_5309" /* 5309 */;
import _mod5310 from "module_5310" /* 5310 */;

if (_mod5308) {
  function setProto(arg0, arg1) {
    if (_mod5308(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5309;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5310) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5310(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
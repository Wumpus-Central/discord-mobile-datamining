// === Module 5912: ? ===

// Module 5912
import _mod1308 from "module_1308" /* 1308 */;
import _mod5913 from "module_5913" /* 5913 */;
import _mod5914 from "module_5914" /* 5914 */;
import _mod5915 from "module_5915" /* 5915 */;

if (_mod5913) {
  function setProto(arg0, arg1) {
    if (_mod5913(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5914;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5915) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5915(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
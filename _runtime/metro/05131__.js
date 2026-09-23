// === Module 5131: ? ===

// Module 5131
import _mod1282 from "module_1282" /* 1282 */;
import _mod5132 from "module_5132" /* 5132 */;
import _mod5133 from "module_5133" /* 5133 */;
import _mod5134 from "module_5134" /* 5134 */;

if (_mod5132) {
  function setProto(arg0, arg1) {
    if (_mod5132(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5133;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5134) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5134(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
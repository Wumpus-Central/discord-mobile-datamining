// === Module 5133: ? ===

// Module 5133
import _mod1282 from "module_1282" /* 1282 */;
import _mod5134 from "module_5134" /* 5134 */;
import _mod5135 from "module_5135" /* 5135 */;
import _mod5136 from "module_5136" /* 5136 */;

if (_mod5134) {
  function setProto(arg0, arg1) {
    if (_mod5134(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5135;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5136) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5136(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
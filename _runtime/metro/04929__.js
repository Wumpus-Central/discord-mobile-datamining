// === Module 4929: ? ===

// Module 4929
import _mod1282 from "module_1282" /* 1282 */;
import _mod4930 from "module_4930" /* 4930 */;
import _mod4931 from "module_4931" /* 4931 */;
import _mod4932 from "module_4932" /* 4932 */;

if (_mod4930) {
  function setProto(arg0, arg1) {
    if (_mod4930(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4931;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4932) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4932(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
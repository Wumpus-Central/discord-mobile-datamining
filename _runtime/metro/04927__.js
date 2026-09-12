// === Module 4927: ? ===

// Module 4927
import _mod1283 from "module_1283" /* 1283 */;
import _mod4928 from "module_4928" /* 4928 */;
import _mod4929 from "module_4929" /* 4929 */;
import _mod4930 from "module_4930" /* 4930 */;

if (_mod4928) {
  function setProto(arg0, arg1) {
    if (_mod4928(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4929;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4930) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4930(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
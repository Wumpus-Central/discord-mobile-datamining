// === Module 4896: ? ===

// Module 4896
import _mod1283 from "module_1283" /* 1283 */;
import _mod4897 from "module_4897" /* 4897 */;
import _mod4898 from "module_4898" /* 4898 */;
import _mod4899 from "module_4899" /* 4899 */;

if (_mod4897) {
  function setProto(arg0, arg1) {
    if (_mod4897(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4898;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4899) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4899(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
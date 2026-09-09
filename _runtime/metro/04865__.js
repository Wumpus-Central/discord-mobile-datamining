// === Module 4865: ? ===

// Module 4865
import _mod1283 from "module_1283" /* 1283 */;
import _mod4866 from "module_4866" /* 4866 */;
import _mod4867 from "module_4867" /* 4867 */;
import _mod4868 from "module_4868" /* 4868 */;

if (_mod4866) {
  function setProto(arg0, arg1) {
    if (_mod4866(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4867;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4868) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4868(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
// === Module 4851: ? ===

// Module 4851
import _mod4852 from "module_4852" /* 4852 */;
import _mod4853 from "module_4853" /* 4853 */;
import _mod4854 from "module_4854" /* 4854 */;

const _mod1283 = tmp(1283);
if (_mod4852) {
  function setProto(arg0, arg1) {
    if (_mod4852(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4853;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4854) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4854(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
// === Module 6624: ? ===

// Module 6624
import _mod1293 from "module_1293" /* 1293 */;
import _mod6625 from "module_6625" /* 6625 */;
import _mod6626 from "module_6626" /* 6626 */;
import _mod6627 from "module_6627" /* 6627 */;

if (_mod6625) {
  function setProto(arg0, arg1) {
    if (_mod6625(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6626;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6627) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6627(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
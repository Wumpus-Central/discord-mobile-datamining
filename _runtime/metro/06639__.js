// === Module 6639: ? ===

// Module 6639
import _mod1293 from "module_1293" /* 1293 */;
import _mod6640 from "module_6640" /* 6640 */;
import _mod6641 from "module_6641" /* 6641 */;
import _mod6642 from "module_6642" /* 6642 */;

if (_mod6640) {
  function setProto(arg0, arg1) {
    if (_mod6640(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6641;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6642) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6642(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
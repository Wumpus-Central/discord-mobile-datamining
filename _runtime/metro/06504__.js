// === Module 6504: ? ===

// Module 6504
import _mod1293 from "module_1293" /* 1293 */;
import _mod6505 from "module_6505" /* 6505 */;
import _mod6506 from "module_6506" /* 6506 */;
import _mod6507 from "module_6507" /* 6507 */;

if (_mod6505) {
  function setProto(arg0, arg1) {
    if (_mod6505(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6506;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6507) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6507(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
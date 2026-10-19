// === Module 6386: ? ===

// Module 6386
import _mod1308 from "module_1308" /* 1308 */;
import _mod6387 from "module_6387" /* 6387 */;
import _mod6388 from "module_6388" /* 6388 */;
import _mod6389 from "module_6389" /* 6389 */;

if (_mod6387) {
  function setProto(arg0, arg1) {
    if (_mod6387(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6388;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6389) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6389(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
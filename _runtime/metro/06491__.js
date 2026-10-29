// === Module 6491: ? ===

// Module 6491
import _mod1305 from "module_1305" /* 1305 */;
import _mod6492 from "module_6492" /* 6492 */;
import _mod6493 from "module_6493" /* 6493 */;
import _mod6494 from "module_6494" /* 6494 */;

if (_mod6492) {
  function setProto(arg0, arg1) {
    if (_mod6492(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6493;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6494) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6494(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
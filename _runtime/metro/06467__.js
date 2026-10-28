// === Module 6467: ? ===

// Module 6467
import _mod1305 from "module_1305" /* 1305 */;
import _mod6468 from "module_6468" /* 6468 */;
import _mod6469 from "module_6469" /* 6469 */;
import _mod6470 from "module_6470" /* 6470 */;

if (_mod6468) {
  function setProto(arg0, arg1) {
    if (_mod6468(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6469;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6470) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6470(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
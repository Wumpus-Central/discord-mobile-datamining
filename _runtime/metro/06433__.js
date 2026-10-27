// === Module 6433: ? ===

// Module 6433
import _mod1305 from "module_1305" /* 1305 */;
import _mod6434 from "module_6434" /* 6434 */;
import _mod6435 from "module_6435" /* 6435 */;
import _mod6436 from "module_6436" /* 6436 */;

if (_mod6434) {
  function setProto(arg0, arg1) {
    if (_mod6434(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6435;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6436) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6436(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
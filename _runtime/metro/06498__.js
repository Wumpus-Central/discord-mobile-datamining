// === Module 6498: ? ===

// Module 6498
import _mod1294 from "module_1294" /* 1294 */;
import _mod6499 from "module_6499" /* 6499 */;
import _mod6500 from "module_6500" /* 6500 */;
import _mod6501 from "module_6501" /* 6501 */;

if (_mod6499) {
  function setProto(arg0, arg1) {
    if (_mod6499(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1294("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6500;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6501) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6501(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
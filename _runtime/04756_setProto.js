// === Module 4756: setProto ===

// Module 4756 (setProto)
import _mod541 from "module_541" /* 541 */;
import setPrototypeOf from "setPrototypeOf" /* 4757 */;
import _mod4758 from "module_4758" /* 4758 */;
import _mod4759 from "module_4759" /* 4759 */;

if (setPrototypeOf) {
  function setProto(arg0, arg1) {
    if (setPrototypeOf(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod541("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    const tmp = require;
  }
} else {
  setProto = _mod4758;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4759) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4759(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
// === Module 4692: setProto ===

// Module 4692 (setProto)
import _mod541 from "module_541" /* 541 */;
import setPrototypeOf from "setPrototypeOf" /* 4693 */;
import _mod4694 from "module_4694" /* 4694 */;
import _mod4695 from "module_4695" /* 4695 */;

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
  setProto = _mod4694;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4695) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4695(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
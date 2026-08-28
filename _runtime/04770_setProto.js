// === Module 4770: setProto ===

// Module 4770 (setProto)
import _mod541 from "module_541" /* 541 */;
import setPrototypeOf from "setPrototypeOf" /* 4771 */;
import _mod4772 from "module_4772" /* 4772 */;
import _mod4773 from "module_4773" /* 4773 */;

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
  setProto = _mod4772;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4773) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4773(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
// === Module 4772: setProto ===

// Module 4772 (setProto)
import _mod541 from "module_541" /* 541 */;
import setPrototypeOf from "setPrototypeOf" /* 4773 */;
import _mod4774 from "module_4774" /* 4774 */;
import _mod4775 from "module_4775" /* 4775 */;

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
  setProto = _mod4774;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4775) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4775(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
// === Module 4437: setProto ===

// Module 4437 (setProto)
import _mod541 from "module_541" /* 541 */;
import setPrototypeOf from "setPrototypeOf" /* 4438 */;
import _mod4439 from "module_4439" /* 4439 */;
import _mod4440 from "module_4440" /* 4440 */;

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
  setProto = _mod4439;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4440) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4440(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
// === Module 4805: setProto ===

// Module 4805 (setProto)
import _mod538 from "module_538" /* 538 */;
import setPrototypeOf from "setPrototypeOf" /* 4806 */;
import _mod4807 from "module_4807" /* 4807 */;
import _mod4808 from "module_4808" /* 4808 */;

if (setPrototypeOf) {
  function setProto(arg0, arg1) {
    if (setPrototypeOf(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod538("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    const tmp = require;
  }
} else {
  setProto = _mod4807;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4808) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4808(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
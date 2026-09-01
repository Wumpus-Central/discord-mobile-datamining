// === Module 4804: setProto ===

// Module 4804 (setProto)
import _mod541 from "module_541" /* 541 */;
import setPrototypeOf from "setPrototypeOf" /* 4805 */;
import _mod4806 from "module_4806" /* 4806 */;
import _mod4807 from "module_4807" /* 4807 */;

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
  setProto = _mod4806;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4807) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4807(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
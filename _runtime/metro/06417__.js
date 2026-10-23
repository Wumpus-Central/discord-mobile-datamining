// === Module 6417: ? ===

// Module 6417
import _mod1308 from "module_1308" /* 1308 */;
import _mod6418 from "module_6418" /* 6418 */;
import _mod6419 from "module_6419" /* 6419 */;
import _mod6420 from "module_6420" /* 6420 */;

if (_mod6418) {
  function setProto(arg0, arg1) {
    if (_mod6418(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6419;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6420) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6420(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
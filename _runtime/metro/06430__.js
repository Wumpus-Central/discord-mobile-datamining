// === Module 6430: ? ===

// Module 6430
import _mod1308 from "module_1308" /* 1308 */;
import _mod6431 from "module_6431" /* 6431 */;
import _mod6432 from "module_6432" /* 6432 */;
import _mod6433 from "module_6433" /* 6433 */;

if (_mod6431) {
  function setProto(arg0, arg1) {
    if (_mod6431(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6432;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6433) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6433(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
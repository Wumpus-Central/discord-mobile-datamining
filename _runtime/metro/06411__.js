// === Module 6411: ? ===

// Module 6411
import _mod1308 from "module_1308" /* 1308 */;
import _mod6412 from "module_6412" /* 6412 */;
import _mod6413 from "module_6413" /* 6413 */;
import _mod6414 from "module_6414" /* 6414 */;

if (_mod6412) {
  function setProto(arg0, arg1) {
    if (_mod6412(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6413;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6414) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6414(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
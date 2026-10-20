// === Module 6389: ? ===

// Module 6389
import _mod1308 from "module_1308" /* 1308 */;
import _mod6390 from "module_6390" /* 6390 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6392 from "module_6392" /* 6392 */;

if (_mod6390) {
  function setProto(arg0, arg1) {
    if (_mod6390(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6391;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6392) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6392(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
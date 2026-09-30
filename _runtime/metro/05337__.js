// === Module 5337: ? ===

// Module 5337
import _mod1282 from "module_1282" /* 1282 */;
import _mod5338 from "module_5338" /* 5338 */;
import _mod5339 from "module_5339" /* 5339 */;
import _mod5340 from "module_5340" /* 5340 */;

if (_mod5338) {
  function setProto(arg0, arg1) {
    if (_mod5338(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5339;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5340) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5340(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
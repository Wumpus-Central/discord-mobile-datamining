// === Module 5693: ? ===

// Module 5693
import _mod1306 from "module_1306" /* 1306 */;
import _mod5694 from "module_5694" /* 5694 */;
import _mod5695 from "module_5695" /* 5695 */;
import _mod5696 from "module_5696" /* 5696 */;

if (_mod5694) {
  function setProto(arg0, arg1) {
    if (_mod5694(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5695;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5696) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5696(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
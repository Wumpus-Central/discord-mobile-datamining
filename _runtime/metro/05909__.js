// === Module 5909: ? ===

// Module 5909
import _mod1306 from "module_1306" /* 1306 */;
import _mod5910 from "module_5910" /* 5910 */;
import _mod5911 from "module_5911" /* 5911 */;
import _mod5912 from "module_5912" /* 5912 */;

if (_mod5910) {
  function setProto(arg0, arg1) {
    if (_mod5910(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5911;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5912) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5912(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
// === Module 5698: ? ===

// Module 5698
import _mod1306 from "module_1306" /* 1306 */;
import _mod5699 from "module_5699" /* 5699 */;
import _mod5700 from "module_5700" /* 5700 */;
import _mod5701 from "module_5701" /* 5701 */;

if (_mod5699) {
  function setProto(arg0, arg1) {
    if (_mod5699(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5700;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5701) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5701(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
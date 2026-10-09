// === Module 5690: ? ===

// Module 5690
import _mod1306 from "module_1306" /* 1306 */;
import _mod5691 from "module_5691" /* 5691 */;
import _mod5692 from "module_5692" /* 5692 */;
import _mod5693 from "module_5693" /* 5693 */;

if (_mod5691) {
  function setProto(arg0, arg1) {
    if (_mod5691(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5692;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5693) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5693(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
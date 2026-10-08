// === Module 5689: ? ===

// Module 5689
import _mod1305 from "module_1305" /* 1305 */;
import _mod5690 from "module_5690" /* 5690 */;
import _mod5691 from "module_5691" /* 5691 */;
import _mod5692 from "module_5692" /* 5692 */;

if (_mod5690) {
  function setProto(arg0, arg1) {
    if (_mod5690(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5691;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5692) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5692(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
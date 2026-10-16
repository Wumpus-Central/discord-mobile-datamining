// === Module 5911: ? ===

// Module 5911
import _mod1308 from "module_1308" /* 1308 */;
import _mod5912 from "module_5912" /* 5912 */;
import _mod5913 from "module_5913" /* 5913 */;
import _mod5914 from "module_5914" /* 5914 */;

if (_mod5912) {
  function setProto(arg0, arg1) {
    if (_mod5912(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5913;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5914) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5914(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
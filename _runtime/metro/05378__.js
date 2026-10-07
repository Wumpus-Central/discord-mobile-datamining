// === Module 5378: ? ===

// Module 5378
import _mod1293 from "module_1293" /* 1293 */;
import _mod5379 from "module_5379" /* 5379 */;
import _mod5380 from "module_5380" /* 5380 */;
import _mod5381 from "module_5381" /* 5381 */;

if (_mod5379) {
  function setProto(arg0, arg1) {
    if (_mod5379(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5380;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5381) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5381(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
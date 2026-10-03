// === Module 5371: ? ===

// Module 5371
import _mod1293 from "module_1293" /* 1293 */;
import _mod5372 from "module_5372" /* 5372 */;
import _mod5373 from "module_5373" /* 5373 */;
import _mod5374 from "module_5374" /* 5374 */;

if (_mod5372) {
  function setProto(arg0, arg1) {
    if (_mod5372(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5373;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5374) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5374(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
// _runtime/04433_setProto.js
import _mod541 from "module_541" /* 541 */;
import setPrototypeOf from "setPrototypeOf" /* 4434 */;
import _mod4435 from "module_4435" /* 4435 */;
import _mod4436 from "module_4436" /* 4436 */;

if (setPrototypeOf) {
  function setProto(arg0, arg1) {
    if (setPrototypeOf(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod541("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    const tmp = require;
  }
} else {
  setProto = _mod4435;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4436) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4436(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
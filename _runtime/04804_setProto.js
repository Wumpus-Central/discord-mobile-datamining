// _runtime/04804_setProto.js
import _mod538 from "metro/00538__.js";
import setPrototypeOf from "04805_setPrototypeOf.js";
import _mod4806 from "metro/04806__.js";
import _mod4807 from "metro/04807__.js";

if (setPrototypeOf) {
  function setProto(arg0, arg1) {
    if (setPrototypeOf(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod538("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    const tmp = require;
  }
} else {
  setProto = _mod4806;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4807) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4807(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

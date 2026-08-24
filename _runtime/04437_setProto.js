// _runtime/04437_setProto.js
import _mod541 from "metro/00541__.js";
import setPrototypeOf from "04438_setPrototypeOf.js";
import _mod4439 from "metro/04439__.js";
import _mod4440 from "metro/04440__.js";

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
  setProto = _mod4439;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4440) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4440(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
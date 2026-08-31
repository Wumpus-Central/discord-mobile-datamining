// _runtime/04772_setProto.js
import _mod541 from "metro/00541__.js";
import setPrototypeOf from "04773_setPrototypeOf.js";
import _mod4774 from "metro/04774__.js";
import _mod4775 from "metro/04775__.js";

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
  setProto = _mod4774;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4775) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4775(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
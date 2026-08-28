// _runtime/04770_setProto.js
import _mod541 from "metro/00541__.js";
import setPrototypeOf from "04771_setPrototypeOf.js";
import _mod4772 from "metro/04772__.js";
import _mod4773 from "metro/04773__.js";

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
  setProto = _mod4772;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4773) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4773(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
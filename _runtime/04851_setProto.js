// _runtime/04851_setProto.js
import _mod1283 from "metro/01283__.js";
import setPrototypeOf from "04852_setPrototypeOf.js";
import _mod4853 from "metro/04853__.js";
import _mod4854 from "metro/04854__.js";

if (setPrototypeOf) {
  function setProto(arg0, arg1) {
    if (setPrototypeOf(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    const tmp = require;
  }
} else {
  setProto = _mod4853;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4854) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4854(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

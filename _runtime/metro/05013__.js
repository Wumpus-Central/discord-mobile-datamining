// _runtime/metro/05013__.js
import _mod1282 from "01282__.js";
import _mod5014 from "05014__.js";
import _mod5015 from "05015__.js";
import _mod5016 from "05016__.js";

if (_mod5014) {
  function setProto(arg0, arg1) {
    if (_mod5014(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5015;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5016) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5016(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

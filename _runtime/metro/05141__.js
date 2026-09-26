// _runtime/metro/05141__.js
import _mod1282 from "01282__.js";
import _mod5142 from "05142__.js";
import _mod5143 from "05143__.js";
import _mod5144 from "05144__.js";

if (_mod5142) {
  function setProto(arg0, arg1) {
    if (_mod5142(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5143;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5144) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5144(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

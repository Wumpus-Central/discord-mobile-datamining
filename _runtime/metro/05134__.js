// _runtime/metro/05134__.js
import _mod1282 from "01282__.js";
import _mod5135 from "05135__.js";
import _mod5136 from "05136__.js";
import _mod5137 from "05137__.js";

if (_mod5135) {
  function setProto(arg0, arg1) {
    if (_mod5135(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5136;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5137) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5137(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

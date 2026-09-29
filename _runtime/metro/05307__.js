// _runtime/metro/05307__.js
import _mod1282 from "01282__.js";
import _mod5308 from "05308__.js";
import _mod5309 from "05309__.js";
import _mod5310 from "05310__.js";

if (_mod5308) {
  function setProto(arg0, arg1) {
    if (_mod5308(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5309;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5310) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5310(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

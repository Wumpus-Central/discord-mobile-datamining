// _runtime/metro/05337__.js
import _mod1282 from "01282__.js";
import _mod5338 from "05338__.js";
import _mod5339 from "05339__.js";
import _mod5340 from "05340__.js";

if (_mod5338) {
  function setProto(arg0, arg1) {
    if (_mod5338(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5339;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5340) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5340(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

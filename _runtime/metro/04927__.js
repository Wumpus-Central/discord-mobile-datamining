// _runtime/metro/04927__.js
import _mod1283 from "01283__.js";
import _mod4928 from "04928__.js";
import _mod4929 from "04929__.js";
import _mod4930 from "04930__.js";

if (_mod4928) {
  function setProto(arg0, arg1) {
    if (_mod4928(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4929;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4930) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4930(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

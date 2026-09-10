// _runtime/metro/04896__.js
import _mod1283 from "01283__.js";
import _mod4897 from "04897__.js";
import _mod4898 from "04898__.js";
import _mod4899 from "04899__.js";

if (_mod4897) {
  function setProto(arg0, arg1) {
    if (_mod4897(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4898;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4899) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4899(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

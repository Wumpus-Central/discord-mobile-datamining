// _runtime/metro/04897__.js
import _mod1283 from "01283__.js";
import _mod4898 from "04898__.js";
import _mod4899 from "04899__.js";
import _mod4900 from "04900__.js";

if (_mod4898) {
  function setProto(arg0, arg1) {
    if (_mod4898(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4899;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4900) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4900(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

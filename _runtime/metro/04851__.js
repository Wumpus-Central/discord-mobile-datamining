// _runtime/metro/04851__.js
import _mod1283 from "01283__.js";
import _mod4852 from "04852__.js";
import _mod4853 from "04853__.js";
import _mod4854 from "04854__.js";

if (_mod4852) {
  function setProto(arg0, arg1) {
    if (_mod4852(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
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

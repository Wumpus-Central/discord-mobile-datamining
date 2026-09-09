// _runtime/metro/04865__.js
import _mod1283 from "01283__.js";
import _mod4866 from "04866__.js";
import _mod4867 from "04867__.js";
import _mod4868 from "04868__.js";

if (_mod4866) {
  function setProto(arg0, arg1) {
    if (_mod4866(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4867;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4868) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4868(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

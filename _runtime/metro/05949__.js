// _runtime/metro/05949__.js
import _mod1308 from "01308__.js";
import _mod5950 from "05950__.js";
import _mod5951 from "05951__.js";
import _mod5952 from "05952__.js";

if (_mod5950) {
  function setProto(arg0, arg1) {
    if (_mod5950(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5951;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5952) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5952(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

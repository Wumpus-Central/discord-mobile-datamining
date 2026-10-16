// _runtime/metro/05912__.js
import _mod1308 from "01308__.js";
import _mod5913 from "05913__.js";
import _mod5914 from "05914__.js";
import _mod5915 from "05915__.js";

if (_mod5913) {
  function setProto(arg0, arg1) {
    if (_mod5913(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5914;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5915) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5915(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

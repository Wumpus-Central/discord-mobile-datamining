// _runtime/metro/05131__.js
import _mod1282 from "01282__.js";
import _mod5132 from "05132__.js";
import _mod5133 from "05133__.js";
import _mod5134 from "05134__.js";

if (_mod5132) {
  function setProto(arg0, arg1) {
    if (_mod5132(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5133;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5134) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5134(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

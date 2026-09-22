// _runtime/metro/05047__.js
import _mod1282 from "01282__.js";
import _mod5048 from "05048__.js";
import _mod5049 from "05049__.js";
import _mod5050 from "05050__.js";

if (_mod5048) {
  function setProto(arg0, arg1) {
    if (_mod5048(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5049;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5050) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5050(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

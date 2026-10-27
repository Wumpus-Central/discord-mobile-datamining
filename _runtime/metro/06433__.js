// _runtime/metro/06433__.js
import _mod1305 from "01305__.js";
import _mod6434 from "06434__.js";
import _mod6435 from "06435__.js";
import _mod6436 from "06436__.js";

if (_mod6434) {
  function setProto(arg0, arg1) {
    if (_mod6434(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6435;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6436) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6436(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

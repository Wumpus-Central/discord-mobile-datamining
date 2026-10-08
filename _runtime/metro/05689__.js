// _runtime/metro/05689__.js
import _mod1305 from "01305__.js";
import _mod5690 from "05690__.js";
import _mod5691 from "05691__.js";
import _mod5692 from "05692__.js";

if (_mod5690) {
  function setProto(arg0, arg1) {
    if (_mod5690(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5691;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5692) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5692(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

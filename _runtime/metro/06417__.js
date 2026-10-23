// _runtime/metro/06417__.js
import _mod1308 from "01308__.js";
import _mod6418 from "06418__.js";
import _mod6419 from "06419__.js";
import _mod6420 from "06420__.js";

if (_mod6418) {
  function setProto(arg0, arg1) {
    if (_mod6418(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6419;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6420) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6420(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

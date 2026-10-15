// _runtime/metro/05909__.js
import _mod1306 from "01306__.js";
import _mod5910 from "05910__.js";
import _mod5911 from "05911__.js";
import _mod5912 from "05912__.js";

if (_mod5910) {
  function setProto(arg0, arg1) {
    if (_mod5910(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5911;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5912) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5912(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

// _runtime/metro/05693__.js
import _mod1306 from "01306__.js";
import _mod5694 from "05694__.js";
import _mod5695 from "05695__.js";
import _mod5696 from "05696__.js";

if (_mod5694) {
  function setProto(arg0, arg1) {
    if (_mod5694(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5695;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5696) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5696(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

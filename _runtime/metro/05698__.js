// _runtime/metro/05698__.js
import _mod1306 from "01306__.js";
import _mod5699 from "05699__.js";
import _mod5700 from "05700__.js";
import _mod5701 from "05701__.js";

if (_mod5699) {
  function setProto(arg0, arg1) {
    if (_mod5699(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5700;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5701) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5701(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;

// _runtime/metro/15594__.js
import withoutSetter from "../15595_withoutSetter.js";
import _mod15606 from "15606__.js";
import _mod15608 from "15608__.js";
import _mod15611 from "15611__.js";
import _mod15614 from "15614__.js";
import _mod15615 from "15615__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15606(arg0)) {
    if (!_mod15608(arg0)) {
      let str = arg1;
      const tmp4 = _mod15611(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15614(tmp4, arg0, str);
        if (_mod15606(tmp5)) {
          if (!_mod15608(tmp5)) {
            const tmp9 = new TypeError("Can't convert object to primitive value");
            throw tmp9;
          }
        }
        return tmp5;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return _mod15615(arg0, str2);
      }
    }
  }
  return arg0;
};

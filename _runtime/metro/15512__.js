// _runtime/metro/15512__.js
import withoutSetter from "../15513_withoutSetter.js";
import _mod15524 from "15524__.js";
import _mod15526 from "15526__.js";
import _mod15529 from "15529__.js";
import _mod15532 from "15532__.js";
import _mod15533 from "15533__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15524(arg0)) {
    if (!_mod15526(arg0)) {
      let str = arg1;
      const tmp4 = _mod15529(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15532(tmp4, arg0, str);
        if (_mod15524(tmp5)) {
          if (!_mod15526(tmp5)) {
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
        return _mod15533(arg0, str2);
      }
    }
  }
  return arg0;
};

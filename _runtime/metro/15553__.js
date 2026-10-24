// _runtime/metro/15553__.js
import withoutSetter from "../15554_withoutSetter.js";
import _mod15565 from "15565__.js";
import _mod15567 from "15567__.js";
import _mod15570 from "15570__.js";
import _mod15573 from "15573__.js";
import _mod15574 from "15574__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15565(arg0)) {
    if (!_mod15567(arg0)) {
      let str = arg1;
      const tmp4 = _mod15570(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15573(tmp4, arg0, str);
        if (_mod15565(tmp5)) {
          if (!_mod15567(tmp5)) {
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
        return _mod15574(arg0, str2);
      }
    }
  }
  return arg0;
};

// _runtime/metro/15551__.js
import withoutSetter from "../15552_withoutSetter.js";
import _mod15563 from "15563__.js";
import _mod15565 from "15565__.js";
import _mod15568 from "15568__.js";
import _mod15571 from "15571__.js";
import _mod15572 from "15572__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15563(arg0)) {
    if (!_mod15565(arg0)) {
      let str = arg1;
      const tmp4 = _mod15568(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15571(tmp4, arg0, str);
        if (_mod15563(tmp5)) {
          if (!_mod15565(tmp5)) {
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
        return _mod15572(arg0, str2);
      }
    }
  }
  return arg0;
};

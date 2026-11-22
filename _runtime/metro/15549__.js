// _runtime/metro/15549__.js
import withoutSetter from "../15550_withoutSetter.js";
import _mod15561 from "15561__.js";
import _mod15563 from "15563__.js";
import _mod15566 from "15566__.js";
import _mod15569 from "15569__.js";
import _mod15570 from "15570__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15561(arg0)) {
    if (!_mod15563(arg0)) {
      let str = arg1;
      const tmp4 = _mod15566(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15569(tmp4, arg0, str);
        if (_mod15561(tmp5)) {
          if (!_mod15563(tmp5)) {
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
        return _mod15570(arg0, str2);
      }
    }
  }
  return arg0;
};

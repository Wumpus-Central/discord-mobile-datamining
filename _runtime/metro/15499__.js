// _runtime/metro/15499__.js
import withoutSetter from "../15500_withoutSetter.js";
import _mod15511 from "15511__.js";
import _mod15513 from "15513__.js";
import _mod15516 from "15516__.js";
import _mod15519 from "15519__.js";
import _mod15520 from "15520__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15511(arg0)) {
    if (!_mod15513(arg0)) {
      let str = arg1;
      const tmp4 = _mod15516(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15519(tmp4, arg0, str);
        if (_mod15511(tmp5)) {
          if (!_mod15513(tmp5)) {
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
        return _mod15520(arg0, str2);
      }
    }
  }
  return arg0;
};

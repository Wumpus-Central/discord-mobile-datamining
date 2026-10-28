// _runtime/metro/15820__.js
import withoutSetter from "../15821_withoutSetter.js";
import _mod15832 from "15832__.js";
import _mod15834 from "15834__.js";
import _mod15837 from "15837__.js";
import _mod15840 from "15840__.js";
import _mod15841 from "15841__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15832(arg0)) {
    if (!_mod15834(arg0)) {
      let str = arg1;
      const tmp4 = _mod15837(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15840(tmp4, arg0, str);
        if (_mod15832(tmp5)) {
          if (!_mod15834(tmp5)) {
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
        return _mod15841(arg0, str2);
      }
    }
  }
  return arg0;
};

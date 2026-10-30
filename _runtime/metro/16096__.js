// _runtime/metro/16096__.js
import withoutSetter from "../16097_withoutSetter.js";
import _mod16108 from "16108__.js";
import _mod16110 from "16110__.js";
import _mod16113 from "16113__.js";
import _mod16116 from "16116__.js";
import _mod16117 from "16117__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16108(arg0)) {
    if (!_mod16110(arg0)) {
      let str = arg1;
      const tmp4 = _mod16113(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16116(tmp4, arg0, str);
        if (_mod16108(tmp5)) {
          if (!_mod16110(tmp5)) {
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
        return _mod16117(arg0, str2);
      }
    }
  }
  return arg0;
};

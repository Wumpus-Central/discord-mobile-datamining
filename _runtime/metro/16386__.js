// _runtime/metro/16386__.js
import withoutSetter from "../16387_withoutSetter.js";
import _mod16398 from "16398__.js";
import _mod16400 from "16400__.js";
import _mod16403 from "16403__.js";
import _mod16406 from "16406__.js";
import _mod16407 from "16407__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16398(arg0)) {
    if (!_mod16400(arg0)) {
      let str = arg1;
      const tmp4 = _mod16403(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16406(tmp4, arg0, str);
        if (_mod16398(tmp5)) {
          if (!_mod16400(tmp5)) {
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
        return _mod16407(arg0, str2);
      }
    }
  }
  return arg0;
};

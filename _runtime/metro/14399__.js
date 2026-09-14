// _runtime/metro/14399__.js
import withoutSetter from "../14400_withoutSetter.js";
import _mod14411 from "14411__.js";
import _mod14413 from "14413__.js";
import _mod14416 from "14416__.js";
import _mod14419 from "14419__.js";
import _mod14420 from "14420__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14411(arg0)) {
    if (!_mod14413(arg0)) {
      let str = arg1;
      const tmp4 = _mod14416(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14419(tmp4, arg0, str);
        if (_mod14411(tmp5)) {
          if (!_mod14413(tmp5)) {
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
        return _mod14420(arg0, str2);
      }
    }
  }
  return arg0;
};

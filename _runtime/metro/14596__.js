// _runtime/metro/14596__.js
import withoutSetter from "../14597_withoutSetter.js";
import _mod14608 from "14608__.js";
import _mod14610 from "14610__.js";
import _mod14613 from "14613__.js";
import _mod14616 from "14616__.js";
import _mod14617 from "14617__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14608(arg0)) {
    if (!_mod14610(arg0)) {
      let str = arg1;
      const tmp4 = _mod14613(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14616(tmp4, arg0, str);
        if (_mod14608(tmp5)) {
          if (!_mod14610(tmp5)) {
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
        return _mod14617(arg0, str2);
      }
    }
  }
  return arg0;
};

// _runtime/metro/14313__.js
import withoutSetter from "../14314_withoutSetter.js";
import _mod14325 from "14325__.js";
import _mod14327 from "14327__.js";
import _mod14330 from "14330__.js";
import _mod14333 from "14333__.js";
import _mod14334 from "14334__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14325(arg0)) {
    if (!_mod14327(arg0)) {
      let str = arg1;
      const tmp4 = _mod14330(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14333(tmp4, arg0, str);
        if (_mod14325(tmp5)) {
          if (!_mod14327(tmp5)) {
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
        return _mod14334(arg0, str2);
      }
    }
  }
  return arg0;
};

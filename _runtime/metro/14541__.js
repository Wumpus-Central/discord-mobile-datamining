// _runtime/metro/14541__.js
import withoutSetter from "../14542_withoutSetter.js";
import _mod14553 from "14553__.js";
import _mod14555 from "14555__.js";
import _mod14558 from "14558__.js";
import _mod14561 from "14561__.js";
import _mod14562 from "14562__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14553(arg0)) {
    if (!_mod14555(arg0)) {
      let str = arg1;
      const tmp4 = _mod14558(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14561(tmp4, arg0, str);
        if (_mod14553(tmp5)) {
          if (!_mod14555(tmp5)) {
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
        return _mod14562(arg0, str2);
      }
    }
  }
  return arg0;
};

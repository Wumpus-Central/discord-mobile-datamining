// _runtime/metro/14387__.js
import withoutSetter from "../14388_withoutSetter.js";
import _mod14399 from "14399__.js";
import _mod14401 from "14401__.js";
import _mod14404 from "14404__.js";
import _mod14407 from "14407__.js";
import _mod14408 from "14408__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14399(arg0)) {
    if (!_mod14401(arg0)) {
      let str = arg1;
      const tmp4 = _mod14404(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14407(tmp4, arg0, str);
        if (_mod14399(tmp5)) {
          if (!_mod14401(tmp5)) {
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
        return _mod14408(arg0, str2);
      }
    }
  }
  return arg0;
};

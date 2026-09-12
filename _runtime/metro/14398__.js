// _runtime/metro/14398__.js
import withoutSetter from "../14399_withoutSetter.js";
import _mod14410 from "14410__.js";
import _mod14412 from "14412__.js";
import _mod14415 from "14415__.js";
import _mod14418 from "14418__.js";
import _mod14419 from "14419__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14410(arg0)) {
    if (!_mod14412(arg0)) {
      let str = arg1;
      const tmp4 = _mod14415(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14418(tmp4, arg0, str);
        if (_mod14410(tmp5)) {
          if (!_mod14412(tmp5)) {
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
        return _mod14419(arg0, str2);
      }
    }
  }
  return arg0;
};

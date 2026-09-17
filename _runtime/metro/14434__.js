// _runtime/metro/14434__.js
import withoutSetter from "../14435_withoutSetter.js";
import _mod14446 from "14446__.js";
import _mod14448 from "14448__.js";
import _mod14451 from "14451__.js";
import _mod14454 from "14454__.js";
import _mod14455 from "14455__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14446(arg0)) {
    if (!_mod14448(arg0)) {
      let str = arg1;
      const tmp4 = _mod14451(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14454(tmp4, arg0, str);
        if (_mod14446(tmp5)) {
          if (!_mod14448(tmp5)) {
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
        return _mod14455(arg0, str2);
      }
    }
  }
  return arg0;
};

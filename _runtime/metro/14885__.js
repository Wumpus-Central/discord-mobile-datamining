// _runtime/metro/14885__.js
import withoutSetter from "../14886_withoutSetter.js";
import _mod14897 from "14897__.js";
import _mod14899 from "14899__.js";
import _mod14902 from "14902__.js";
import _mod14905 from "14905__.js";
import _mod14906 from "14906__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14897(arg0)) {
    if (!_mod14899(arg0)) {
      let str = arg1;
      const tmp4 = _mod14902(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14905(tmp4, arg0, str);
        if (_mod14897(tmp5)) {
          if (!_mod14899(tmp5)) {
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
        return _mod14906(arg0, str2);
      }
    }
  }
  return arg0;
};

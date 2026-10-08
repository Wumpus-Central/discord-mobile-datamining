// _runtime/metro/14391__.js
import withoutSetter from "../14392_withoutSetter.js";
import _mod14403 from "14403__.js";
import _mod14405 from "14405__.js";
import _mod14408 from "14408__.js";
import _mod14411 from "14411__.js";
import _mod14412 from "14412__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14403(arg0)) {
    if (!_mod14405(arg0)) {
      let str = arg1;
      const tmp4 = _mod14408(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14411(tmp4, arg0, str);
        if (_mod14403(tmp5)) {
          if (!_mod14405(tmp5)) {
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
        return _mod14412(arg0, str2);
      }
    }
  }
  return arg0;
};

// _runtime/metro/14072__.js
import withoutSetter from "../14073_withoutSetter.js";
import _mod14084 from "14084__.js";
import _mod14086 from "14086__.js";
import _mod14089 from "14089__.js";
import _mod14092 from "14092__.js";
import _mod14093 from "14093__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14084(arg0)) {
    if (!_mod14086(arg0)) {
      let str = arg1;
      const tmp4 = _mod14089(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14092(tmp4, arg0, str);
        if (_mod14084(tmp5)) {
          if (!_mod14086(tmp5)) {
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
        return _mod14093(arg0, str2);
      }
    }
  }
  return arg0;
};

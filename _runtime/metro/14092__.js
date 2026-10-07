// _runtime/metro/14092__.js
import withoutSetter from "../14093_withoutSetter.js";
import _mod14104 from "14104__.js";
import _mod14106 from "14106__.js";
import _mod14109 from "14109__.js";
import _mod14112 from "14112__.js";
import _mod14113 from "14113__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14104(arg0)) {
    if (!_mod14106(arg0)) {
      let str = arg1;
      const tmp4 = _mod14109(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14112(tmp4, arg0, str);
        if (_mod14104(tmp5)) {
          if (!_mod14106(tmp5)) {
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
        return _mod14113(arg0, str2);
      }
    }
  }
  return arg0;
};

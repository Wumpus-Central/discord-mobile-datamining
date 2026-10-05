// _runtime/metro/14074__.js
import _mod14075 from "14075__.js";
import _mod14086 from "14086__.js";
import _mod14088 from "14088__.js";
import _mod14091 from "14091__.js";
import _mod14094 from "14094__.js";
import _mod14095 from "14095__.js";

let closure_3 = _mod14075("toPrimitive");

export default function (arg0, arg1) {
  if (_mod14086(arg0)) {
    if (!_mod14088(arg0)) {
      let str = arg1;
      const tmp4 = _mod14091(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14094(tmp4, arg0, str);
        if (_mod14086(tmp5)) {
          if (!_mod14088(tmp5)) {
            const self = this;
            const self2 = this;
            const tmp7 = new TypeError("Can't convert object to primitive value");
            throw tmp7;
          }
        }
        return tmp5;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return _mod14095(arg0, str2);
      }
    }
  }
  return arg0;
}

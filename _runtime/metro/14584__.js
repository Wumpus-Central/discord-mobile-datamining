// _runtime/metro/14584__.js
import withoutSetter from "../14585_withoutSetter.js";
import _mod14596 from "14596__.js";
import _mod14598 from "14598__.js";
import _mod14601 from "14601__.js";
import _mod14604 from "14604__.js";
import _mod14605 from "14605__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14596(arg0)) {
    if (!_mod14598(arg0)) {
      let str = arg1;
      const tmp4 = _mod14601(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14604(tmp4, arg0, str);
        if (_mod14596(tmp5)) {
          if (!_mod14598(tmp5)) {
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
        return _mod14605(arg0, str2);
      }
    }
  }
  return arg0;
};

// _runtime/metro/14590__.js
import withoutSetter from "../14591_withoutSetter.js";
import _mod14602 from "14602__.js";
import _mod14604 from "14604__.js";
import _mod14607 from "14607__.js";
import _mod14610 from "14610__.js";
import _mod14611 from "14611__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14602(arg0)) {
    if (!_mod14604(arg0)) {
      let str = arg1;
      const tmp4 = _mod14607(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14610(tmp4, arg0, str);
        if (_mod14602(tmp5)) {
          if (!_mod14604(tmp5)) {
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
        return _mod14611(arg0, str2);
      }
    }
  }
  return arg0;
};

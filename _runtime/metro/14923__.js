// _runtime/metro/14923__.js
import withoutSetter from "../14924_withoutSetter.js";
import _mod14935 from "14935__.js";
import _mod14937 from "14937__.js";
import _mod14940 from "14940__.js";
import _mod14943 from "14943__.js";
import _mod14944 from "14944__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14935(arg0)) {
    if (!_mod14937(arg0)) {
      let str = arg1;
      const tmp4 = _mod14940(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14943(tmp4, arg0, str);
        if (_mod14935(tmp5)) {
          if (!_mod14937(tmp5)) {
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
        return _mod14944(arg0, str2);
      }
    }
  }
  return arg0;
};

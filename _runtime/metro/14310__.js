// _runtime/metro/14310__.js
import withoutSetter from "../14311_withoutSetter.js";
import _mod14322 from "14322__.js";
import _mod14324 from "14324__.js";
import _mod14327 from "14327__.js";
import _mod14330 from "14330__.js";
import _mod14331 from "14331__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14322(arg0)) {
    if (!_mod14324(arg0)) {
      let str = arg1;
      const tmp4 = _mod14327(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14330(tmp4, arg0, str);
        if (_mod14322(tmp5)) {
          if (!_mod14324(tmp5)) {
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
        return _mod14331(arg0, str2);
      }
    }
  }
  return arg0;
};

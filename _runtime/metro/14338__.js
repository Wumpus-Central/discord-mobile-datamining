// _runtime/metro/14338__.js
import withoutSetter from "../14339_withoutSetter.js";
import _mod14350 from "14350__.js";
import _mod14352 from "14352__.js";
import _mod14355 from "14355__.js";
import _mod14358 from "14358__.js";
import _mod14359 from "14359__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14350(arg0)) {
    if (!_mod14352(arg0)) {
      let str = arg1;
      const tmp4 = _mod14355(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14358(tmp4, arg0, str);
        if (_mod14350(tmp5)) {
          if (!_mod14352(tmp5)) {
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
        return _mod14359(arg0, str2);
      }
    }
  }
  return arg0;
};

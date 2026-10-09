// _runtime/metro/14487__.js
import withoutSetter from "../14488_withoutSetter.js";
import _mod14499 from "14499__.js";
import _mod14501 from "14501__.js";
import _mod14504 from "14504__.js";
import _mod14507 from "14507__.js";
import _mod14508 from "14508__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14499(arg0)) {
    if (!_mod14501(arg0)) {
      let str = arg1;
      const tmp4 = _mod14504(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14507(tmp4, arg0, str);
        if (_mod14499(tmp5)) {
          if (!_mod14501(tmp5)) {
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
        return _mod14508(arg0, str2);
      }
    }
  }
  return arg0;
};

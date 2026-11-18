// _runtime/metro/15478__.js
import withoutSetter from "../15479_withoutSetter.js";
import _mod15490 from "15490__.js";
import _mod15492 from "15492__.js";
import _mod15495 from "15495__.js";
import _mod15498 from "15498__.js";
import _mod15499 from "15499__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15490(arg0)) {
    if (!_mod15492(arg0)) {
      let str = arg1;
      const tmp4 = _mod15495(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15498(tmp4, arg0, str);
        if (_mod15490(tmp5)) {
          if (!_mod15492(tmp5)) {
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
        return _mod15499(arg0, str2);
      }
    }
  }
  return arg0;
};

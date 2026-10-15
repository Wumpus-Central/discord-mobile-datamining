// _runtime/metro/15219__.js
import withoutSetter from "../15220_withoutSetter.js";
import _mod15231 from "15231__.js";
import _mod15233 from "15233__.js";
import _mod15236 from "15236__.js";
import _mod15239 from "15239__.js";
import _mod15240 from "15240__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15231(arg0)) {
    if (!_mod15233(arg0)) {
      let str = arg1;
      const tmp4 = _mod15236(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15239(tmp4, arg0, str);
        if (_mod15231(tmp5)) {
          if (!_mod15233(tmp5)) {
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
        return _mod15240(arg0, str2);
      }
    }
  }
  return arg0;
};

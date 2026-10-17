// _runtime/metro/15333__.js
import withoutSetter from "../15334_withoutSetter.js";
import _mod15345 from "15345__.js";
import _mod15347 from "15347__.js";
import _mod15350 from "15350__.js";
import _mod15353 from "15353__.js";
import _mod15354 from "15354__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15345(arg0)) {
    if (!_mod15347(arg0)) {
      let str = arg1;
      const tmp4 = _mod15350(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15353(tmp4, arg0, str);
        if (_mod15345(tmp5)) {
          if (!_mod15347(tmp5)) {
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
        return _mod15354(arg0, str2);
      }
    }
  }
  return arg0;
};

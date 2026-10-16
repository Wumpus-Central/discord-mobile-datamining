// _runtime/metro/15254__.js
import withoutSetter from "../15255_withoutSetter.js";
import _mod15266 from "15266__.js";
import _mod15268 from "15268__.js";
import _mod15271 from "15271__.js";
import _mod15274 from "15274__.js";
import _mod15275 from "15275__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15266(arg0)) {
    if (!_mod15268(arg0)) {
      let str = arg1;
      const tmp4 = _mod15271(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15274(tmp4, arg0, str);
        if (_mod15266(tmp5)) {
          if (!_mod15268(tmp5)) {
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
        return _mod15275(arg0, str2);
      }
    }
  }
  return arg0;
};

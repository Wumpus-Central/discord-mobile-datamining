// _runtime/metro/15428__.js
import withoutSetter from "../15429_withoutSetter.js";
import _mod15440 from "15440__.js";
import _mod15442 from "15442__.js";
import _mod15445 from "15445__.js";
import _mod15448 from "15448__.js";
import _mod15449 from "15449__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15440(arg0)) {
    if (!_mod15442(arg0)) {
      let str = arg1;
      const tmp4 = _mod15445(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15448(tmp4, arg0, str);
        if (_mod15440(tmp5)) {
          if (!_mod15442(tmp5)) {
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
        return _mod15449(arg0, str2);
      }
    }
  }
  return arg0;
};

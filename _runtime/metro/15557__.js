// _runtime/metro/15557__.js
import withoutSetter from "../15558_withoutSetter.js";
import _mod15569 from "15569__.js";
import _mod15571 from "15571__.js";
import _mod15574 from "15574__.js";
import _mod15577 from "15577__.js";
import _mod15578 from "15578__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15569(arg0)) {
    if (!_mod15571(arg0)) {
      let str = arg1;
      const tmp4 = _mod15574(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15577(tmp4, arg0, str);
        if (_mod15569(tmp5)) {
          if (!_mod15571(tmp5)) {
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
        return _mod15578(arg0, str2);
      }
    }
  }
  return arg0;
};

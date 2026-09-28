// _runtime/metro/13801__.js
import withoutSetter from "../13802_withoutSetter.js";
import _mod13813 from "13813__.js";
import _mod13815 from "13815__.js";
import _mod13818 from "13818__.js";
import _mod13821 from "13821__.js";
import _mod13822 from "13822__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13813(arg0)) {
    if (!_mod13815(arg0)) {
      let str = arg1;
      const tmp4 = _mod13818(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13821(tmp4, arg0, str);
        if (_mod13813(tmp5)) {
          if (!_mod13815(tmp5)) {
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
        return _mod13822(arg0, str2);
      }
    }
  }
  return arg0;
};

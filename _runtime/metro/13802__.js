// _runtime/metro/13802__.js
import withoutSetter from "../13803_withoutSetter.js";
import _mod13814 from "13814__.js";
import _mod13816 from "13816__.js";
import _mod13819 from "13819__.js";
import _mod13822 from "13822__.js";
import _mod13823 from "13823__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13814(arg0)) {
    if (!_mod13816(arg0)) {
      let str = arg1;
      const tmp4 = _mod13819(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13822(tmp4, arg0, str);
        if (_mod13814(tmp5)) {
          if (!_mod13816(tmp5)) {
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
        return _mod13823(arg0, str2);
      }
    }
  }
  return arg0;
};

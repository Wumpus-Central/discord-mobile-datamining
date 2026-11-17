// _runtime/metro/16795__.js
import withoutSetter from "../16796_withoutSetter.js";
import _mod16807 from "16807__.js";
import _mod16809 from "16809__.js";
import _mod16812 from "16812__.js";
import _mod16815 from "16815__.js";
import _mod16816 from "16816__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16807(arg0)) {
    if (!_mod16809(arg0)) {
      let str = arg1;
      const tmp4 = _mod16812(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16815(tmp4, arg0, str);
        if (_mod16807(tmp5)) {
          if (!_mod16809(tmp5)) {
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
        return _mod16816(arg0, str2);
      }
    }
  }
  return arg0;
};

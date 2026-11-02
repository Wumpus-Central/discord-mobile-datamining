// _runtime/metro/16141__.js
import withoutSetter from "../16142_withoutSetter.js";
import _mod16153 from "16153__.js";
import _mod16155 from "16155__.js";
import _mod16158 from "16158__.js";
import _mod16161 from "16161__.js";
import _mod16162 from "16162__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16153(arg0)) {
    if (!_mod16155(arg0)) {
      let str = arg1;
      const tmp4 = _mod16158(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16161(tmp4, arg0, str);
        if (_mod16153(tmp5)) {
          if (!_mod16155(tmp5)) {
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
        return _mod16162(arg0, str2);
      }
    }
  }
  return arg0;
};

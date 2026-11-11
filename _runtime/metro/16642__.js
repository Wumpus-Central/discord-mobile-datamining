// _runtime/metro/16642__.js
import withoutSetter from "../16643_withoutSetter.js";
import _mod16654 from "16654__.js";
import _mod16656 from "16656__.js";
import _mod16659 from "16659__.js";
import _mod16662 from "16662__.js";
import _mod16663 from "16663__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16654(arg0)) {
    if (!_mod16656(arg0)) {
      let str = arg1;
      const tmp4 = _mod16659(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16662(tmp4, arg0, str);
        if (_mod16654(tmp5)) {
          if (!_mod16656(tmp5)) {
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
        return _mod16663(arg0, str2);
      }
    }
  }
  return arg0;
};

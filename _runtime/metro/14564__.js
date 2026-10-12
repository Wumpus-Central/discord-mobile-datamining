// _runtime/metro/14564__.js
import withoutSetter from "../14565_withoutSetter.js";
import _mod14576 from "14576__.js";
import _mod14578 from "14578__.js";
import _mod14581 from "14581__.js";
import _mod14584 from "14584__.js";
import _mod14585 from "14585__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14576(arg0)) {
    if (!_mod14578(arg0)) {
      let str = arg1;
      const tmp4 = _mod14581(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14584(tmp4, arg0, str);
        if (_mod14576(tmp5)) {
          if (!_mod14578(tmp5)) {
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
        return _mod14585(arg0, str2);
      }
    }
  }
  return arg0;
};

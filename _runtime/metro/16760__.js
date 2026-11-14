// _runtime/metro/16760__.js
import withoutSetter from "../16761_withoutSetter.js";
import _mod16772 from "16772__.js";
import _mod16774 from "16774__.js";
import _mod16777 from "16777__.js";
import _mod16780 from "16780__.js";
import _mod16781 from "16781__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16772(arg0)) {
    if (!_mod16774(arg0)) {
      let str = arg1;
      const tmp4 = _mod16777(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16780(tmp4, arg0, str);
        if (_mod16772(tmp5)) {
          if (!_mod16774(tmp5)) {
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
        return _mod16781(arg0, str2);
      }
    }
  }
  return arg0;
};

// _runtime/metro/16637__.js
import withoutSetter from "../16638_withoutSetter.js";
import _mod16649 from "16649__.js";
import _mod16651 from "16651__.js";
import _mod16654 from "16654__.js";
import _mod16657 from "16657__.js";
import _mod16658 from "16658__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16649(arg0)) {
    if (!_mod16651(arg0)) {
      let str = arg1;
      const tmp4 = _mod16654(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16657(tmp4, arg0, str);
        if (_mod16649(tmp5)) {
          if (!_mod16651(tmp5)) {
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
        return _mod16658(arg0, str2);
      }
    }
  }
  return arg0;
};

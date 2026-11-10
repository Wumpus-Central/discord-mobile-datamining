// _runtime/metro/16481__.js
import withoutSetter from "../16482_withoutSetter.js";
import _mod16493 from "16493__.js";
import _mod16495 from "16495__.js";
import _mod16498 from "16498__.js";
import _mod16501 from "16501__.js";
import _mod16502 from "16502__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16493(arg0)) {
    if (!_mod16495(arg0)) {
      let str = arg1;
      const tmp4 = _mod16498(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16501(tmp4, arg0, str);
        if (_mod16493(tmp5)) {
          if (!_mod16495(tmp5)) {
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
        return _mod16502(arg0, str2);
      }
    }
  }
  return arg0;
};

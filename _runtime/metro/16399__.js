// _runtime/metro/16399__.js
import withoutSetter from "../16400_withoutSetter.js";
import _mod16411 from "16411__.js";
import _mod16413 from "16413__.js";
import _mod16416 from "16416__.js";
import _mod16419 from "16419__.js";
import _mod16420 from "16420__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16411(arg0)) {
    if (!_mod16413(arg0)) {
      let str = arg1;
      const tmp4 = _mod16416(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16419(tmp4, arg0, str);
        if (_mod16411(tmp5)) {
          if (!_mod16413(tmp5)) {
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
        return _mod16420(arg0, str2);
      }
    }
  }
  return arg0;
};

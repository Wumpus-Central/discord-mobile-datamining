// _runtime/metro/15383__.js
import withoutSetter from "../15384_withoutSetter.js";
import _mod15395 from "15395__.js";
import _mod15397 from "15397__.js";
import _mod15400 from "15400__.js";
import _mod15403 from "15403__.js";
import _mod15404 from "15404__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15395(arg0)) {
    if (!_mod15397(arg0)) {
      let str = arg1;
      const tmp4 = _mod15400(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15403(tmp4, arg0, str);
        if (_mod15395(tmp5)) {
          if (!_mod15397(tmp5)) {
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
        return _mod15404(arg0, str2);
      }
    }
  }
  return arg0;
};

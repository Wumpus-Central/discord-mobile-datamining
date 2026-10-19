// _runtime/metro/15365__.js
import withoutSetter from "../15366_withoutSetter.js";
import _mod15377 from "15377__.js";
import _mod15379 from "15379__.js";
import _mod15382 from "15382__.js";
import _mod15385 from "15385__.js";
import _mod15386 from "15386__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15377(arg0)) {
    if (!_mod15379(arg0)) {
      let str = arg1;
      const tmp4 = _mod15382(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15385(tmp4, arg0, str);
        if (_mod15377(tmp5)) {
          if (!_mod15379(tmp5)) {
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
        return _mod15386(arg0, str2);
      }
    }
  }
  return arg0;
};

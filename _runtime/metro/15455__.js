// _runtime/metro/15455__.js
import withoutSetter from "../15456_withoutSetter.js";
import _mod15467 from "15467__.js";
import _mod15469 from "15469__.js";
import _mod15472 from "15472__.js";
import _mod15475 from "15475__.js";
import _mod15476 from "15476__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15467(arg0)) {
    if (!_mod15469(arg0)) {
      let str = arg1;
      const tmp4 = _mod15472(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15475(tmp4, arg0, str);
        if (_mod15467(tmp5)) {
          if (!_mod15469(tmp5)) {
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
        return _mod15476(arg0, str2);
      }
    }
  }
  return arg0;
};

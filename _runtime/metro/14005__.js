// _runtime/metro/14005__.js
import withoutSetter from "../14006_withoutSetter.js";
import _mod14017 from "14017__.js";
import _mod14019 from "14019__.js";
import _mod14022 from "14022__.js";
import _mod14025 from "14025__.js";
import _mod14026 from "14026__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14017(arg0)) {
    if (!_mod14019(arg0)) {
      let str = arg1;
      const tmp4 = _mod14022(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14025(tmp4, arg0, str);
        if (_mod14017(tmp5)) {
          if (!_mod14019(tmp5)) {
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
        return _mod14026(arg0, str2);
      }
    }
  }
  return arg0;
};

// _runtime/metro/13997__.js
import withoutSetter from "../13998_withoutSetter.js";
import _mod14009 from "14009__.js";
import _mod14011 from "14011__.js";
import _mod14014 from "14014__.js";
import _mod14017 from "14017__.js";
import _mod14018 from "14018__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14009(arg0)) {
    if (!_mod14011(arg0)) {
      let str = arg1;
      const tmp4 = _mod14014(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14017(tmp4, arg0, str);
        if (_mod14009(tmp5)) {
          if (!_mod14011(tmp5)) {
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
        return _mod14018(arg0, str2);
      }
    }
  }
  return arg0;
};

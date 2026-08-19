// _runtime/metro/13686__.js
import withoutSetter from "../13687_withoutSetter.js";
import all from "../13698_all.js";
import _mod13700 from "13700__.js";
import _mod13703 from "13703__.js";
import call from "../13706_call.js";
import _mod13707 from "13707__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!_mod13700(arg0)) {
      let str = arg1;
      const tmp4 = _mod13703(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = call(tmp4, arg0, str);
        if (all(tmp5)) {
          if (!_mod13700(tmp5)) {
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
        return _mod13707(arg0, str2);
      }
    }
  }
  return arg0;
};
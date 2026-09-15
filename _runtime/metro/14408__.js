// _runtime/metro/14408__.js
import withoutSetter from "../14409_withoutSetter.js";
import _mod14420 from "14420__.js";
import _mod14422 from "14422__.js";
import _mod14425 from "14425__.js";
import _mod14428 from "14428__.js";
import _mod14429 from "14429__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14420(arg0)) {
    if (!_mod14422(arg0)) {
      let str = arg1;
      const tmp4 = _mod14425(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14428(tmp4, arg0, str);
        if (_mod14420(tmp5)) {
          if (!_mod14422(tmp5)) {
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
        return _mod14429(arg0, str2);
      }
    }
  }
  return arg0;
};

// _runtime/metro/14676__.js
import withoutSetter from "../14677_withoutSetter.js";
import _mod14688 from "14688__.js";
import _mod14690 from "14690__.js";
import _mod14693 from "14693__.js";
import _mod14696 from "14696__.js";
import _mod14697 from "14697__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14688(arg0)) {
    if (!_mod14690(arg0)) {
      let str = arg1;
      const tmp4 = _mod14693(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14696(tmp4, arg0, str);
        if (_mod14688(tmp5)) {
          if (!_mod14690(tmp5)) {
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
        return _mod14697(arg0, str2);
      }
    }
  }
  return arg0;
};

// _runtime/metro/14685__.js
import withoutSetter from "../14686_withoutSetter.js";
import _mod14697 from "14697__.js";
import _mod14699 from "14699__.js";
import _mod14702 from "14702__.js";
import _mod14705 from "14705__.js";
import _mod14706 from "14706__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14697(arg0)) {
    if (!_mod14699(arg0)) {
      let str = arg1;
      const tmp4 = _mod14702(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14705(tmp4, arg0, str);
        if (_mod14697(tmp5)) {
          if (!_mod14699(tmp5)) {
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
        return _mod14706(arg0, str2);
      }
    }
  }
  return arg0;
};

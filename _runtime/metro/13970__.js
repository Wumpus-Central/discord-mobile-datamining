// _runtime/metro/13970__.js
import withoutSetter from "../13971_withoutSetter.js";
import _mod13982 from "13982__.js";
import _mod13984 from "13984__.js";
import _mod13987 from "13987__.js";
import _mod13990 from "13990__.js";
import _mod13991 from "13991__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13982(arg0)) {
    if (!_mod13984(arg0)) {
      let str = arg1;
      const tmp4 = _mod13987(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13990(tmp4, arg0, str);
        if (_mod13982(tmp5)) {
          if (!_mod13984(tmp5)) {
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
        return _mod13991(arg0, str2);
      }
    }
  }
  return arg0;
};

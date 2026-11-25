// _runtime/metro/15694__.js
import withoutSetter from "../15695_withoutSetter.js";
import _mod15706 from "15706__.js";
import _mod15708 from "15708__.js";
import _mod15711 from "15711__.js";
import _mod15714 from "15714__.js";
import _mod15715 from "15715__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15706(arg0)) {
    if (!_mod15708(arg0)) {
      let str = arg1;
      const tmp4 = _mod15711(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15714(tmp4, arg0, str);
        if (_mod15706(tmp5)) {
          if (!_mod15708(tmp5)) {
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
        return _mod15715(arg0, str2);
      }
    }
  }
  return arg0;
};

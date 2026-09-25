// _runtime/metro/13846__.js
import withoutSetter from "../13847_withoutSetter.js";
import _mod13858 from "13858__.js";
import _mod13860 from "13860__.js";
import _mod13863 from "13863__.js";
import _mod13866 from "13866__.js";
import _mod13867 from "13867__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13858(arg0)) {
    if (!_mod13860(arg0)) {
      let str = arg1;
      const tmp4 = _mod13863(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13866(tmp4, arg0, str);
        if (_mod13858(tmp5)) {
          if (!_mod13860(tmp5)) {
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
        return _mod13867(arg0, str2);
      }
    }
  }
  return arg0;
};

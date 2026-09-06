// _runtime/metro/14310__.js
import withoutSetter from "../14311_withoutSetter.js";
import _mod14322 from "14322__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14322(arg0)) {
    if (!tmp(14324)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14327)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14330)(tmp4, arg0, str);
        if (tmp(14322)(tmp5)) {
          if (!tmp(14324)(tmp5)) {
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
        return tmp(14331)(arg0, str2);
      }
    }
  }
  return arg0;
};

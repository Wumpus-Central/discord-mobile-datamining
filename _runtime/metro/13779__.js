// _runtime/metro/13779__.js
import withoutSetter from "../13780_withoutSetter.js";
import all from "../13791_all.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(13793)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13796)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13799)(tmp4, arg0, str);
        if (tmp(13791)(tmp5)) {
          if (!tmp(13793)(tmp5)) {
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
        return tmp(13800)(arg0, str2);
      }
    }
  }
  return arg0;
};
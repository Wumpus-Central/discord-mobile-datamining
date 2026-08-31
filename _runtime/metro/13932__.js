// _runtime/metro/13932__.js
import withoutSetter from "../13933_withoutSetter.js";
import all from "../13944_all.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(13946)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13949)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13952)(tmp4, arg0, str);
        if (tmp(13944)(tmp5)) {
          if (!tmp(13946)(tmp5)) {
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
        return tmp(13953)(arg0, str2);
      }
    }
  }
  return arg0;
};
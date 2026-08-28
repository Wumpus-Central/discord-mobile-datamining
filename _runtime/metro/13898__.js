// === Module 13898: ? ===

// Module 13898
import withoutSetter from "withoutSetter" /* 13899 */;
import all from "all" /* 13910 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(13912)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13915)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13918)(tmp4, arg0, str);
        if (tmp(13910)(tmp5)) {
          if (!tmp(13912)(tmp5)) {
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
        return tmp(13919)(arg0, str2);
      }
    }
  }
  return arg0;
};
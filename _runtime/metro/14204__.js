// === Module 14204: ? ===

// Module 14204
import withoutSetter from "withoutSetter" /* 14205 */;
import all from "all" /* 14216 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(14218)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14221)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14224)(tmp4, arg0, str);
        if (tmp(14216)(tmp5)) {
          if (!tmp(14218)(tmp5)) {
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
        return tmp(14225)(arg0, str2);
      }
    }
  }
  return arg0;
};
// === Module 14188: ? ===

// Module 14188
import withoutSetter from "withoutSetter" /* 14189 */;
import all from "all" /* 14200 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(14202)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14205)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14208)(tmp4, arg0, str);
        if (tmp(14200)(tmp5)) {
          if (!tmp(14202)(tmp5)) {
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
        return tmp(14209)(arg0, str2);
      }
    }
  }
  return arg0;
};
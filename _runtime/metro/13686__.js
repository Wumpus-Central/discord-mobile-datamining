// _runtime/metro/13686__.js
import withoutSetter from "withoutSetter" /* 13687 */;
import all from "all" /* 13698 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(13700)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13703)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13706)(tmp4, arg0, str);
        if (tmp(13698)(tmp5)) {
          if (!tmp(13700)(tmp5)) {
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
        return tmp(13707)(arg0, str2);
      }
    }
  }
  return arg0;
};
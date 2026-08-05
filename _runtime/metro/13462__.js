// _runtime/metro/13462__.js
import { all } from "../13474_all.js";
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(13476)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13479)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13482)(tmp4, arg0, str);
        if (tmp(13474)(tmp5)) {
          if (!tmp(13476)(tmp5)) {
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
        return tmp(13483)(arg0, str2);
      }
    }
  }
  return arg0;
};
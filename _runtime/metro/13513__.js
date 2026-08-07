// _runtime/metro/13513__.js
import { all } from "../13525_all.js";
let closure_3 = require("withoutSetter")("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!tmp(13527)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(13530)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(13533)(tmp4, arg0, str);
        if (tmp(13525)(tmp5)) {
          if (!tmp(13527)(tmp5)) {
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
        return tmp(13534)(arg0, str2);
      }
    }
  }
  return arg0;
};
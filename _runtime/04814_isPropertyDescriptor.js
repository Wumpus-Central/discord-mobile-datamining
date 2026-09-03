// _runtime/04814_isPropertyDescriptor.js
import bind from "00570_bind.js";

let closure_2 = Object.create(null);

export default function isPropertyDescriptor(obj) {
  if (obj) {
    if (typeof obj === "object") {
      for (const key10001 in arg0) {
        let tmp11 = key10001;
        let tmp12 = require;
        let tmp13 = dependencyMap;
        if (!bind(arg0, key10001)) {
          continue;
        } else {
          let tmp = table;
          if (table[key10001]) {
            continue;
          } else {
            let flag = false;
            return false;
          }
        }
        continue;
      }
      let tmp4 = bind(obj, "[[Value]]");
      if (!tmp4) {
        tmp4 = tmp2(570)(obj, "[[Writable]]");
      }
      let tmp5 = tmp2(570)(obj, "[[Get]]");
      if (!tmp5) {
        tmp5 = tmp2(570)(obj, "[[Set]]");
      }
      if (tmp4) {
        if (tmp5) {
          const tmp8 = new tmp2(538)("Property Descriptors may not be both accessor and data descriptors");
          throw tmp8;
        }
      }
      return true;
    }
  }
  return false;
}

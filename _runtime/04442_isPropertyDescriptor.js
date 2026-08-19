// === Module 4442: isPropertyDescriptor ===

// Module 4442 (isPropertyDescriptor)
import _mod541 from "module_541" /* 541 */;
import bind from "bind" /* 573 */;

let closure_2 = Object.create(null);

export default function isPropertyDescriptor(obj) {
  if (obj) {
    if (typeof obj === "object") {
      for (const key10001 in arg0) {
        if (!bind(arg0, key10001)) {
          continue;
        } else if (table[key10001]) {
          continue;
        } else {
          let flag = false;
          return false;
        }
        continue;
      }
      let tmp4 = bind(obj, "[[Value]]");
      if (!tmp4) {
        tmp4 = bind(obj, "[[Writable]]");
      }
      let tmp5 = bind(obj, "[[Get]]");
      if (!tmp5) {
        tmp5 = bind(obj, "[[Set]]");
      }
      if (tmp4) {
        if (tmp5) {
          const tmp8 = new _mod541("Property Descriptors may not be both accessor and data descriptors");
          throw tmp8;
        }
      }
      return true;
    }
  }
  return false;
};
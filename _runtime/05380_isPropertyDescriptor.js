// === Module 5380: isPropertyDescriptor ===

// Module 5380 (isPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import bind from "bind" /* 1325 */;

let closure_2 = Object.assign({ "[[Configurable]]": true, "[[Enumerable]]": true, "[[Get]]": true, "[[Set]]": true, "[[Value]]": true, "[[Writable]]": true });

export default function isPropertyDescriptor(obj) {
  const tmp = obj;
  if (tmp) {
    if (typeof obj === "object") {
      for (const key10001 in obj) {
        if (!bind(obj, key10001)) {
          continue;
        } else if (closure_2[key10001]) {
          continue;
        } else {
          let flag = false;
          return false;
        }
        continue;
      }
      const tmp5 = bind(obj, "[[Value]]") || bind(obj, "[[Writable]]");
      const tmp6 = bind(obj, "[[Get]]") || bind(obj, "[[Set]]");
      if (tmp5) {
        if (tmp6) {
          const self = this;
          const self2 = this;
          const tmp7 = new _mod1293("Property Descriptors may not be both accessor and data descriptors");
          throw tmp7;
        }
      }
      return true;
    }
  }
  return false;
};
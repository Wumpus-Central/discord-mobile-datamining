// _runtime/metro/04860__.js
import _mod1283 from "01283__.js";
import _mod1315 from "01315__.js";

let closure_2 = Object.assign({
  "[[Configurable]]": true,
  "[[Enumerable]]": true,
  "[[Get]]": true,
  "[[Set]]": true,
  "[[Value]]": true,
  "[[Writable]]": true,
});

export default function isPropertyDescriptor(obj) {
  if (obj) {
    if (typeof obj === "object") {
      for (const key10001 in arg0) {
        if (!_mod1315(arg0, key10001)) {
          continue;
        } else if (closure_2[key10001]) {
          continue;
        } else {
          let flag = false;
          return false;
        }
        continue;
      }
      let tmp4 = _mod1315(obj, "[[Value]]");
      if (!tmp4) {
        tmp4 = _mod1315(obj, "[[Writable]]");
      }
      let tmp5 = _mod1315(obj, "[[Get]]");
      if (!tmp5) {
        tmp5 = _mod1315(obj, "[[Set]]");
      }
      if (tmp4) {
        if (tmp5) {
          const tmp8 = new _mod1283("Property Descriptors may not be both accessor and data descriptors");
          throw tmp8;
        }
      }
      return true;
    }
  }
  return false;
}

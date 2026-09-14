// _runtime/metro/04936__.js
import _mod1281 from "01281__.js";
import _mod1313 from "01313__.js";

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
        if (!_mod1313(arg0, key10001)) {
          continue;
        } else if (closure_2[key10001]) {
          continue;
        } else {
          let flag = false;
          return false;
        }
        continue;
      }
      let tmp4 = _mod1313(obj, "[[Value]]");
      if (!tmp4) {
        tmp4 = _mod1313(obj, "[[Writable]]");
      }
      let tmp5 = _mod1313(obj, "[[Get]]");
      if (!tmp5) {
        tmp5 = _mod1313(obj, "[[Set]]");
      }
      if (tmp4) {
        if (tmp5) {
          const tmp8 = new _mod1281("Property Descriptors may not be both accessor and data descriptors");
          throw tmp8;
        }
      }
      return true;
    }
  }
  return false;
}

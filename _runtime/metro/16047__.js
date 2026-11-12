// _runtime/metro/16047__.js
import defaultErrorMap from "../16048_defaultErrorMap.js";
import _mod16050 from "16050__.js";
import _mod16051 from "16051__.js";
import DIRTY from "../16052_DIRTY.js";
import _mod16053 from "16053__.js";
import _mod16054 from "16054__.js";

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let fn = self;
  if (self) {
    fn = self.__exportStar;
  }
  if (!fn) {
    fn = (obj, exports) => {
      for (const key10007 in arg0) {
        let tmp6 = "default" === key10007;
        if (tmp6) {
          if (tmp6) {
            continue;
          } else {
            let tmp4 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10007);
          } else {
            hasOwnPropertyResult = call(arg1, key10007);
          }
        }
      }
    };
  }
  const _Object2 = Object;
  fn(defaultErrorMap, exports);
  fn(DIRTY, exports);
  fn(_mod16053, exports);
  fn(_mod16051, exports);
  fn(_mod16054, exports);
  fn(_mod16050, exports);
} else {
  let _Object = Object;
}

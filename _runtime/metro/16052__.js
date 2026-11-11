// _runtime/metro/16052__.js
import defaultErrorMap from "../16053_defaultErrorMap.js";
import _mod16055 from "16055__.js";
import _mod16056 from "16056__.js";
import DIRTY from "../16057_DIRTY.js";
import _mod16058 from "16058__.js";
import _mod16059 from "16059__.js";

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
  fn(_mod16058, exports);
  fn(_mod16056, exports);
  fn(_mod16059, exports);
  fn(_mod16055, exports);
} else {
  let _Object = Object;
}

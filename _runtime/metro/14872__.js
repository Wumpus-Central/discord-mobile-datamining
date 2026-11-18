// _runtime/metro/14872__.js
import defaultErrorMap from "../14873_defaultErrorMap.js";
import _mod14875 from "14875__.js";
import _mod14876 from "14876__.js";
import DIRTY from "../14877_DIRTY.js";
import _mod14878 from "14878__.js";
import _mod14879 from "14879__.js";

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
  fn(_mod14878, exports);
  fn(_mod14876, exports);
  fn(_mod14879, exports);
  fn(_mod14875, exports);
} else {
  let _Object = Object;
}

// _runtime/metro/15819__.js
import defaultErrorMap from "../15820_defaultErrorMap.js";
import _mod15822 from "15822__.js";
import _mod15823 from "15823__.js";
import DIRTY from "../15824_DIRTY.js";
import _mod15825 from "15825__.js";
import _mod15826 from "15826__.js";

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
  fn(_mod15825, exports);
  fn(_mod15823, exports);
  fn(_mod15826, exports);
  fn(_mod15822, exports);
} else {
  let _Object = Object;
}

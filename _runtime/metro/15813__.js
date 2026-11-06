// _runtime/metro/15813__.js
import defaultErrorMap from "../15814_defaultErrorMap.js";
import _mod15816 from "15816__.js";
import _mod15817 from "15817__.js";
import DIRTY from "../15818_DIRTY.js";
import _mod15819 from "15819__.js";
import _mod15820 from "15820__.js";

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
  fn(_mod15819, exports);
  fn(_mod15817, exports);
  fn(_mod15820, exports);
  fn(_mod15816, exports);
} else {
  let _Object = Object;
}

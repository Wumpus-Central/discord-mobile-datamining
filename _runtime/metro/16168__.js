// _runtime/metro/16168__.js
import defaultErrorMap from "../16169_defaultErrorMap.js";
import _mod16171 from "16171__.js";
import _mod16172 from "16172__.js";
import DIRTY from "../16173_DIRTY.js";
import _mod16174 from "16174__.js";
import _mod16175 from "16175__.js";

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
  fn(_mod16174, exports);
  fn(_mod16172, exports);
  fn(_mod16175, exports);
  fn(_mod16171, exports);
} else {
  let _Object = Object;
}

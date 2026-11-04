// === Module 15806: ? ===

// Module 15806
import defaultErrorMap from "defaultErrorMap" /* 15807 */;
import _mod15809 from "module_15809" /* 15809 */;
import _mod15810 from "module_15810" /* 15810 */;
import DIRTY from "DIRTY" /* 15811 */;
import _mod15812 from "module_15812" /* 15812 */;
import _mod15813 from "module_15813" /* 15813 */;

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
  fn(_mod15812, exports);
  fn(_mod15810, exports);
  fn(_mod15813, exports);
  fn(_mod15809, exports);
} else {
  let _Object = Object;
}
// === Module 15855: ? ===

// Module 15855
import defaultErrorMap from "defaultErrorMap" /* 15856 */;
import _mod15858 from "module_15858" /* 15858 */;
import _mod15859 from "module_15859" /* 15859 */;
import DIRTY from "DIRTY" /* 15860 */;
import _mod15861 from "module_15861" /* 15861 */;
import _mod15862 from "module_15862" /* 15862 */;

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
  fn(_mod15861, exports);
  fn(_mod15859, exports);
  fn(_mod15862, exports);
  fn(_mod15858, exports);
} else {
  let _Object = Object;
}
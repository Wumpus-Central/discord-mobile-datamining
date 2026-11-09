// === Module 15865: ? ===

// Module 15865
import defaultErrorMap from "defaultErrorMap" /* 15866 */;
import _mod15868 from "module_15868" /* 15868 */;
import _mod15869 from "module_15869" /* 15869 */;
import DIRTY from "DIRTY" /* 15870 */;
import _mod15871 from "module_15871" /* 15871 */;
import _mod15872 from "module_15872" /* 15872 */;

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
  fn(_mod15871, exports);
  fn(_mod15869, exports);
  fn(_mod15872, exports);
  fn(_mod15868, exports);
} else {
  let _Object = Object;
}
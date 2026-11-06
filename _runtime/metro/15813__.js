// === Module 15813: ? ===

// Module 15813
import defaultErrorMap from "defaultErrorMap" /* 15814 */;
import _mod15816 from "module_15816" /* 15816 */;
import _mod15817 from "module_15817" /* 15817 */;
import DIRTY from "DIRTY" /* 15818 */;
import _mod15819 from "module_15819" /* 15819 */;
import _mod15820 from "module_15820" /* 15820 */;

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
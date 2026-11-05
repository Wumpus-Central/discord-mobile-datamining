// === Module 15819: ? ===

// Module 15819
import defaultErrorMap from "defaultErrorMap" /* 15820 */;
import _mod15822 from "module_15822" /* 15822 */;
import _mod15823 from "module_15823" /* 15823 */;
import DIRTY from "DIRTY" /* 15824 */;
import _mod15825 from "module_15825" /* 15825 */;
import _mod15826 from "module_15826" /* 15826 */;

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
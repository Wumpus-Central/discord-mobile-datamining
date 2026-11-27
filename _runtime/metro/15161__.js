// === Module 15161: ? ===

// Module 15161
import defaultErrorMap from "defaultErrorMap" /* 15162 */;
import _mod15164 from "module_15164" /* 15164 */;
import _mod15165 from "module_15165" /* 15165 */;
import DIRTY from "DIRTY" /* 15166 */;
import _mod15167 from "module_15167" /* 15167 */;
import _mod15168 from "module_15168" /* 15168 */;

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
  fn(_mod15167, exports);
  fn(_mod15165, exports);
  fn(_mod15168, exports);
  fn(_mod15164, exports);
} else {
  let _Object = Object;
}
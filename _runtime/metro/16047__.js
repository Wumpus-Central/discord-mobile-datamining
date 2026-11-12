// === Module 16047: ? ===

// Module 16047
import defaultErrorMap from "defaultErrorMap" /* 16048 */;
import _mod16050 from "module_16050" /* 16050 */;
import _mod16051 from "module_16051" /* 16051 */;
import DIRTY from "DIRTY" /* 16052 */;
import _mod16053 from "module_16053" /* 16053 */;
import _mod16054 from "module_16054" /* 16054 */;

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
  fn(_mod16053, exports);
  fn(_mod16051, exports);
  fn(_mod16054, exports);
  fn(_mod16050, exports);
} else {
  let _Object = Object;
}
// === Module 14872: ? ===

// Module 14872
import defaultErrorMap from "defaultErrorMap" /* 14873 */;
import _mod14875 from "module_14875" /* 14875 */;
import _mod14876 from "module_14876" /* 14876 */;
import DIRTY from "DIRTY" /* 14877 */;
import _mod14878 from "module_14878" /* 14878 */;
import _mod14879 from "module_14879" /* 14879 */;

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
  fn(_mod14878, exports);
  fn(_mod14876, exports);
  fn(_mod14879, exports);
  fn(_mod14875, exports);
} else {
  let _Object = Object;
}
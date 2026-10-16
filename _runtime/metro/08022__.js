// === Module 8022: ? ===

// Module 8022
import FILE_TYPES_REQUIRED_ADDITIONAL_CHECK from "FILE_TYPES_REQUIRED_ADDITIONAL_CHECK" /* 8023 */;
import _mod8035 from "module_8035" /* 8035 */;
import _mod8043 from "module_8043" /* 8043 */;

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
  fn(FILE_TYPES_REQUIRED_ADDITIONAL_CHECK, exports);
  fn(_mod8035, exports);
  fn(_mod8043, exports);
} else {
  let _Object = Object;
}
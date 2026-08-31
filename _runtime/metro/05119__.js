// === Module 5119: ? ===

// Module 5119
import _mod5120 from "module_5120" /* 5120 */;
import _mod5121 from "module_5121" /* 5121 */;

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
        let tmp5 = key10007;
        let tmp6 = "default" === key10007;
        if (tmp6) {
          if (tmp6) {
            continue;
          } else {
            let tmp3 = self2;
            let tmp4 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10007);
          } else {
            hasOwnPropertyResult = call(arg1, key10007);
          }
          let tmp2 = hasOwnPropertyResult;
        }
      }
    };
  }
  const _Object2 = Object;
  fn(_mod5120, exports);
  fn(_mod5121, exports);
} else {
  let _Object = Object;
}
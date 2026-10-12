// === Module 13311: default_1 ===

// Module 13311 (default_1)
import _mod13312 from "module_13312" /* 13312 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const mergeDefs = fn(_mod13312);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
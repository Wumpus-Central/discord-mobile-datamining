// === Module 8974: default_1 ===

// Module 8974 (default_1)
import _mod8975 from "module_8975" /* 8975 */;

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
const mergeDefs = fn(_mod8975);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
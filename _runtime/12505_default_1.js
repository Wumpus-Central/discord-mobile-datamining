// === Module 12505: default_1 ===

// Module 12505 (default_1)
import _mod12506 from "module_12506" /* 12506 */;

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
const mergeDefs = fn(_mod12506);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
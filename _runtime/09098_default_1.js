// === Module 9098: default_1 ===

// Module 9098 (default_1)
import _mod9099 from "module_9099" /* 9099 */;

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
const mergeDefs = fn(_mod9099);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
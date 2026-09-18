// === Module 9207: default_1 ===

// Module 9207 (default_1)
import _mod9208 from "module_9208" /* 9208 */;

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
const mergeDefs = fn(_mod9208);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
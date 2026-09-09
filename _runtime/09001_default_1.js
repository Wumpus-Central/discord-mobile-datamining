// === Module 9001: default_1 ===

// Module 9001 (default_1)
import _mod9002 from "module_9002" /* 9002 */;

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
const mergeDefs = fn(_mod9002);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
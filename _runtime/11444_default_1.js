// === Module 11444: default_1 ===

// Module 11444 (default_1)
import _mod11445 from "module_11445" /* 11445 */;

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
const mergeDefs = fn(_mod11445);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
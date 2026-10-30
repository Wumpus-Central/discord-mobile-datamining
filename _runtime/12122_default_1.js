// === Module 12122: default_1 ===

// Module 12122 (default_1)
import _mod12123 from "module_12123" /* 12123 */;

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
const mergeDefs = fn(_mod12123);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
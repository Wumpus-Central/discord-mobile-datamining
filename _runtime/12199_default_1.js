// === Module 12199: default_1 ===

// Module 12199 (default_1)
import _mod12200 from "module_12200" /* 12200 */;

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
const sourceShape = fn(_mod12200);

export default function default_1() {
  return sourceShape.default();
};
export default exports.default;
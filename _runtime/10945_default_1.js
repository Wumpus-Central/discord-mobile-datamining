// === Module 10945: default_1 ===

// Module 10945 (default_1)
import _mod10946 from "module_10946" /* 10946 */;

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
const sourceShape = fn(_mod10946);

export default function default_1() {
  return sourceShape.default();
};
export default exports.default;
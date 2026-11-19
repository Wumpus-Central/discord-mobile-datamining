// === Module 10205: default_1 ===

// Module 10205 (default_1)
import _mod10206 from "module_10206" /* 10206 */;

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
const sourceShape = fn(_mod10206);

export default function default_1() {
  return sourceShape.default();
};
export default exports.default;
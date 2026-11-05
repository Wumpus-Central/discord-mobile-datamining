// === Module 12513: default_1 ===

// Module 12513 (default_1)
import _mod12514 from "module_12514" /* 12514 */;

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
const mergeDefs = fn(_mod12514);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
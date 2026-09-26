// === Module 8433: default_1 ===

// Module 8433 (default_1)
import _mod8434 from "module_8434" /* 8434 */;

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
const mergeDefs = fn(_mod8434);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
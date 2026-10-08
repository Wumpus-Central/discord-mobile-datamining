// === Module 13145: default_1 ===

// Module 13145 (default_1)
import _mod13146 from "module_13146" /* 13146 */;

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
const mergeDefs = fn(_mod13146);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
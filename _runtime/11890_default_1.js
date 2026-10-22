// === Module 11890: default_1 ===

// Module 11890 (default_1)
import _mod11891 from "module_11891" /* 11891 */;

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
const mergeDefs = fn(_mod11891);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
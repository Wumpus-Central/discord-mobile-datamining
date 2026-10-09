// === Module 13238: default_1 ===

// Module 13238 (default_1)
import _mod13239 from "module_13239" /* 13239 */;

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
const mergeDefs = fn(_mod13239);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
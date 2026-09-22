// === Module 9252: default_1 ===

// Module 9252 (default_1)
import _mod9253 from "module_9253" /* 9253 */;

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
const mergeDefs = fn(_mod9253);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
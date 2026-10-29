// === Module 11934: default_1 ===

// Module 11934 (default_1)
import _mod11935 from "module_11935" /* 11935 */;

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
const mergeDefs = fn(_mod11935);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
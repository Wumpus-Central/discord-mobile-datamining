// === Module 12251: default_1 ===

// Module 12251 (default_1)
import mergeDefs2 from "mergeDefs" /* 12252 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const mergeDefs = fn(mergeDefs2);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
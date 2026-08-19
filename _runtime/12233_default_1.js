// _runtime/12233_default_1.js
import mergeDefs2 from "12234_mergeDefs.js";

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
// _runtime/12673_default_1.js
import mergeDefs from "12674_mergeDefs.js";

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
let closure_0 = fn(mergeDefs);

export default function default_1() {
  return closure_0.default();
};
export default exports.default;
// _runtime/09098_default_1.js
import _mod9099 from "metro/09099__.js";

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
const mergeDefs = fn(_mod9099);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
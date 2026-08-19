// === Module 1673: JSWorklets ===

// Module 1673 (JSWorklets)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const JSWorklets = arg1;
class JSWorklets {
  constructor() {
    tmp = closure_2(this, JSWorklets);
    return;
  }
}
const items = [
  {
    key: "makeShareableClone",
    value: function makeShareableClone() {
      const reanimatedError = new JSWorklets(1665).ReanimatedError("makeShareableClone should never be called in JSWorklets.");
      throw reanimatedError;
    }
  }
];
let closure_3 = _createClassDefault(JSWorklets, items);

export const createJSWorkletsModule = function createJSWorkletsModule() {
  return new closure_3();
};
// _runtime/01673_JSWorklets.js
import _createClassDefault from "_createClass" /* 42 */;
import closure_2 from "_classCallCheck" /* 41 */;

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
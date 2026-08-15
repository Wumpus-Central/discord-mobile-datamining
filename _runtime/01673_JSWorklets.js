// _runtime/01673_JSWorklets.js
import _classCallCheck from "_classCallCheck";

const JSWorklets = arg1;
class JSWorklets {
  constructor() {
    tmp = outer1_2(this, JSWorklets);
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
let closure_3 = require("_createClass")(JSWorklets, items);

export const createJSWorkletsModule = function createJSWorkletsModule() {
  return new closure_3();
};
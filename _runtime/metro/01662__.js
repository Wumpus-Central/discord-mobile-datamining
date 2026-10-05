// === Module 1662: ? ===

// Module 1662
import _createClassDefault from "_createClass" /* 42 */;
import ReanimatedError from "ReanimatedError" /* 1654 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class JSWorklets {
  constructor() {
    _classCallCheck(this, JSWorklets);
  }
}
const entry = {
  key: "makeShareableClone",
  value: function makeShareableClone() {
    const reanimatedError = new ReanimatedError.ReanimatedError("makeShareableClone should never be called in JSWorklets.");
    throw reanimatedError;
  }
};
const items = [entry];
let closure_3 = _createClassDefault(JSWorklets, items);

export const createJSWorkletsModule = function createJSWorkletsModule() {
  const tmp = new closure_3();
  return tmp;
};
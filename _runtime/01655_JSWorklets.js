// _runtime/01655_JSWorklets.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const JSWorklets = arg1;
class JSWorklets {
  constructor() {
    tmp = c2(this, JSWorklets);
    return;
  }
}
const entry = {
  key: "makeShareableClone",
  value: function makeShareableClone() {
    const reanimatedError = new JSWorklets(1647).ReanimatedError(
      "makeShareableClone should never be called in JSWorklets.",
    );
    throw reanimatedError;
  },
};
const items = [entry];
let closure_3 = _createClassDefault(JSWorklets, items);

export const createJSWorkletsModule = function createJSWorkletsModule() {
  return new closure_3();
};

// _runtime/01671_JSWorklets.js
import _createClassDefault from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";

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
      const reanimatedError = new JSWorklets(1663).ReanimatedError(
        "makeShareableClone should never be called in JSWorklets.",
      );
      throw reanimatedError;
    },
  },
];
let closure_3 = _createClassDefault(JSWorklets, items);

export const createJSWorkletsModule = function createJSWorkletsModule() {
  return new closure_3();
};

// _runtime/metro/01662__.js
import _createClassDefault from "00042__createClass.js";
import ReanimatedError from "../01654_ReanimatedError.js";
import _classCallCheck from "00041__classCallCheck.js";

class JSWorklets {
  constructor() {
    _classCallCheck(this, JSWorklets);
  }
}
const entry = {
  key: "makeShareableClone",
  value: function makeShareableClone() {
    const reanimatedError = new ReanimatedError.ReanimatedError(
      "makeShareableClone should never be called in JSWorklets.",
    );
    throw reanimatedError;
  },
};
const items = [entry];
let closure_3 = _createClassDefault(JSWorklets, items);

export const createJSWorkletsModule = function createJSWorkletsModule() {
  const tmp = new closure_3();
  return tmp;
};

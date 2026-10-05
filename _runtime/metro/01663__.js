// _runtime/metro/01663__.js
import _classPrivateFieldKeyDefault from "../00091__classPrivateFieldKey.js";
import ReanimatedError from "../01654_ReanimatedError.js";
import _mod1664 from "01664__.js";
import react_native from "../01665_react-native.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";

let closure_5 = _classPrivateFieldKeyDefault("workletsModuleProxy");
class NativeWorklets {
  constructor() {
    _classCallCheck(this, NativeWorklets);
    Object.defineProperty(this, closure_5, { writable: true, value: "a" });
    if (undefined === global.__workletsModuleProxy) {
      const obj = _mod1664;
      const valueUnpackerCode = obj.getValueUnpackerCode();
      const WorkletsTurboModule = react_native.WorkletsTurboModule;
      if (WorkletsTurboModule != null) {
        WorkletsTurboModule.installTurboModule(valueUnpackerCode);
      }
    }
    if (undefined === global.__workletsModuleProxy) {
      const self = this;
      const self2 = this;
      const reanimatedError = new ReanimatedError.ReanimatedError(
        "Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.",
      );
      throw reanimatedError;
    } else {
      _classPrivateFieldBase(this, closure_5)[closure_5] = global.__workletsModuleProxy;
    }
  }
}
const entry = {
  key: "makeShareableClone",
  value: function makeShareableClone(arg0, arg1, arg2) {
    const obj = _classPrivateFieldBase(this, closure_5)[closure_5];
    return obj.makeShareableClone(arg0, arg1, arg2);
  },
};
const items = [entry];
let closure_6 = _createClass(NativeWorklets, items);

export const createNativeWorkletsModule = function createNativeWorkletsModule() {
  const tmp = new closure_6();
  return tmp;
};

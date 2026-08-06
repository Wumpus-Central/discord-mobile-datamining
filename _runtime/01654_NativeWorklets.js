// _runtime/01654_NativeWorklets.js
import _classCallCheck from "_classCallCheck";
import _classPrivateFieldBase from "_classPrivateFieldBase";

const NativeWorklets = global;
const require = arg1;
let closure_5 = require("_classPrivateFieldKey")("workletsModuleProxy");
class NativeWorklets {
  constructor() {
    tmp = outer1_3(this, NativeWorklets);
    tmp2 = workletsModuleProxy;
    definePropertyResult = Object.defineProperty(this, workletsModuleProxy, { writable: true, value: "a" });
    tmp4 = NativeWorklets;
    if (undefined === NativeWorklets.__workletsModuleProxy) {
      tmp5 = closure_1;
      tmp6 = closure_2;
      obj = require("valueUnpacker");
      valueUnpackerCode = obj.getValueUnpackerCode();
      WorkletsTurboModule = require("ReanimatedTurboModule").WorkletsTurboModule;
      tmp8 = null;
      if (WorkletsTurboModule != null) {
        installTurboModuleResult = WorkletsTurboModule.installTurboModule(valueUnpackerCode);
      }
    }
    if (undefined === tmp4.__workletsModuleProxy) {
      tmp11 = closure_1;
      tmp12 = closure_2;
      tmp13 = new.target;
      str = "Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
      tmp14 = new.target;
      reanimatedError = new require("t").ReanimatedError("Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.");
      tmp16 = reanimatedError;
      throw reanimatedError;
    } else {
      tmp10 = __esModule;
      __esModule(this, tmp2)[tmp2] = tmp4.__workletsModuleProxy;
      return;
    }
  }
}
const items = [
  {
    key: "makeShareableClone",
    value: function makeShareableClone(arg0, arg1, arg2) {
      return callback2(this, closure_5)[closure_5].makeShareableClone(arg0, arg1, arg2);
    }
  }
];
let closure_6 = require("_createClass")(NativeWorklets, items);

export const createNativeWorkletsModule = function createNativeWorkletsModule() {
  return new closure_6();
};
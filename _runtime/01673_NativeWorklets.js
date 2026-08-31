// === Module 1673: NativeWorklets ===

// Module 1673 (NativeWorklets)
import _createClassDefault from "_createClass" /* 42 */;
import _classPrivateFieldKeyDefault from "_classPrivateFieldKey" /* 91 */;
import t from "t" /* 1664 */;
import valueUnpacker from "valueUnpacker" /* 1674 */;
import ReanimatedTurboModule from "ReanimatedTurboModule" /* 1675 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_classPrivateFieldBase" /* 90 */;

const NativeWorklets = global;
require = arg1;
let closure_5 = _classPrivateFieldKeyDefault("workletsModuleProxy");
class NativeWorklets {
  constructor() {
    tmp = closure_3(this, NativeWorklets);
    tmp2 = closure_5;
    definePropertyResult = Object.defineProperty(this, closure_5, { writable: true, value: "a" });
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
      tmp10 = closure_4;
      closure_4(this, tmp2)[tmp2] = tmp4.__workletsModuleProxy;
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
let closure_6 = _createClassDefault(NativeWorklets, items);

export const createNativeWorkletsModule = function createNativeWorkletsModule() {
  return new closure_6();
};
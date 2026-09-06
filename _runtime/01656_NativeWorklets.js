// _runtime/01656_NativeWorklets.js
import _classPrivateFieldKeyDefault from "00091__classPrivateFieldKey.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _classPrivateFieldBase from "00090__classPrivateFieldBase.js";

const NativeWorklets = global;
const require = arg1;
let closure_5 = _classPrivateFieldKeyDefault("workletsModuleProxy");
class NativeWorklets {
  constructor() {
    tmp = closure_3(this, NativeWorklets);
    tmp2 = hasOwnProperty;
    definePropertyResult = Object.defineProperty(this, hasOwnProperty, { writable: true, value: "a" });
    tmp4 = closure_0;
    if (undefined === closure_0.__workletsModuleProxy) {
      tmp5 = closure_1;
      tmp6 = c2;
      obj = closure_1(c2[4]);
      valueUnpackerCode = obj.getValueUnpackerCode();
      WorkletsTurboModule = closure_1(c2[5]).WorkletsTurboModule;
      tmp8 = null;
      if (WorkletsTurboModule != null) {
        installTurboModuleResult = WorkletsTurboModule.installTurboModule(valueUnpackerCode);
      }
    }
    if (undefined === tmp4.__workletsModuleProxy) {
      tmp11 = closure_1;
      tmp12 = c2;
      tmp13 = new.target;
      str =
        "Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.";
      tmp14 = new.target;
      reanimatedError = new closure_1(c2[6]).ReanimatedError(
        "Native part of Reanimated doesn't seem to be initialized (Worklets).\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#native-part-of-reanimated-doesnt-seem-to-be-initialized for more details.",
      );
      tmp16 = reanimatedError;
      throw reanimatedError;
    } else {
      tmp10 = closure_4;
      closure_4(this, tmp2)[tmp2] = tmp4.__workletsModuleProxy;
      return;
    }
  }
}
const entry = {
  key: "makeShareableClone",
  value: function makeShareableClone(arg0, arg1, arg2) {
    return _classPrivateFieldBase(this, closure_5)[closure_5].makeShareableClone(arg0, arg1, arg2);
  },
};
const items = [entry];
let closure_6 = _createClass(NativeWorklets, items);

export const createNativeWorkletsModule = function createNativeWorkletsModule() {
  return new closure_6();
};

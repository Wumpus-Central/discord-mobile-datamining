// _runtime/06268_NativeGesture.js
import CALLBACK_TYPE from "06161_CALLBACK_TYPE.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import map from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class NativeGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NativeGesture);
    const obj = _getPrototypeOf(NativeGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "NativeViewGestureHandler";
    return tmp3Result;
  }
}
_inherits(NativeGesture, CALLBACK_TYPE.BaseGesture);
const entry = {
  key: "shouldActivateOnStart",
  value: function shouldActivateOnStart(shouldActivateOnStart) {
    this.config.shouldActivateOnStart = shouldActivateOnStart;
    return this;
  },
};
const items = [
  entry,
  {
    key: "disallowInterruption",
    value: function disallowInterruption(disallowInterruption) {
      this.config.disallowInterruption = disallowInterruption;
      return this;
    },
  },
];
const NativeGesture_export = _createClass(NativeGesture, items);

export { NativeGesture_export as NativeGesture };

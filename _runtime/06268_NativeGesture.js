// === Module 6268: NativeGesture ===

// Module 6268 (NativeGesture)
import CALLBACK_TYPE from "CALLBACK_TYPE" /* 6161 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
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
  }
};
const items = [
  entry,
  {
    key: "disallowInterruption",
    value: function disallowInterruption(disallowInterruption) {
      this.config.disallowInterruption = disallowInterruption;
      return this;
    }
  }
];
const NativeGesture_export = _createClass(NativeGesture, items);

export { NativeGesture_export as NativeGesture };
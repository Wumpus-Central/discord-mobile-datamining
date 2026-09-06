// === Module 6783: ? ===

// Module 6783
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
class NativeGesture {
  constructor() {
    self = this;
    tmp = closure_0(this, NativeGesture);
    tmp2 = c2;
    obj = c2(NativeGesture);
    tmp3 = closure_1;
    if (closure_3()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "NativeViewGestureHandler";
    return tmp3Result;
  }
}
_classCallCheck = NativeGesture;
_inherits(NativeGesture, fn(6676).BaseGesture);
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

export const NativeGesture = _createClass(NativeGesture, items);
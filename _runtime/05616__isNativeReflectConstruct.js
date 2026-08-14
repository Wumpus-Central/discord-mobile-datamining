// _runtime/05616__isNativeReflectConstruct.js
import NativeGesture from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class NativeGesture {
  constructor() {
    self = this;
    tmp = NativeGesture(this, NativeGesture);
    tmp2 = __esModule;
    obj = __esModule(NativeGesture);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
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
require("_inherits")(NativeGesture, require("_isNativeReflectConstruct").BaseGesture);
const items = [
  {
    key: "shouldActivateOnStart",
    value: function shouldActivateOnStart(shouldActivateOnStart) {
      this.config.shouldActivateOnStart = shouldActivateOnStart;
      return this;
    }
  },
  {
    key: "disallowInterruption",
    value: function disallowInterruption(disallowInterruption) {
      this.config.disallowInterruption = disallowInterruption;
      return this;
    }
  }
];

export const NativeGesture = importDefaultResult(NativeGesture, items);
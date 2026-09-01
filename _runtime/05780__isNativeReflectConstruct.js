// _runtime/05780__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import NativeGesture from "metro/00041__classCallCheck.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

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
class NativeGesture {
  constructor() {
    self = this;
    tmp = NativeGesture(this, NativeGesture);
    tmp2 = closure_2;
    obj = closure_2(NativeGesture);
    tmp3 = closure_1;
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
_inheritsDefault(NativeGesture, require("_isNativeReflectConstruct").BaseGesture);
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
// _runtime/05786__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import LongPressGesture from "metro/00041__classCallCheck.js";
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
  } catch (err) {}
}
class LongPressGesture {
  constructor() {
    self = this;
    tmp = LongPressGesture(this, LongPressGesture);
    tmp2 = closure_2;
    obj = closure_2(LongPressGesture);
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
    tmp3Result.handlerName = "LongPressGestureHandler";
    result = tmp3Result.shouldCancelWhenOutside(true);
    return tmp3Result;
  }
}
_inheritsDefault(LongPressGesture, require("_isNativeReflectConstruct").BaseGesture);
const items = [
  {
    key: "minDuration",
    value: function minDuration(CONTEXT_MENU_LONG_PRESS_DURATION_MS) {
      this.config.minDurationMs = CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      return this;
    },
  },
  {
    key: "maxDistance",
    value: function maxDistance(maxDist) {
      this.config.maxDist = maxDist;
      return this;
    },
  },
  {
    key: "numberOfPointers",
    value: function numberOfPointers(numberOfPointers) {
      this.config.numberOfPointers = numberOfPointers;
      return this;
    },
  },
];

export const LongPressGesture = importDefaultResult(LongPressGesture, items);

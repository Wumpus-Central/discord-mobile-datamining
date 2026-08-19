// === Module 6503: _isNativeReflectConstruct ===

// Module 6503 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import LongPressGesture from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;

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
    }
  },
  {
    key: "maxDistance",
    value: function maxDistance(maxDist) {
      this.config.maxDist = maxDist;
      return this;
    }
  },
  {
    key: "numberOfPointers",
    value: function numberOfPointers(numberOfPointers) {
      this.config.numberOfPointers = numberOfPointers;
      return this;
    }
  }
];

export const LongPressGesture = importDefaultResult(LongPressGesture, items);
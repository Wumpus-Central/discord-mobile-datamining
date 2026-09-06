// === Module 6776: ? ===

// Module 6776
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
class TapGesture {
  constructor() {
    self = this;
    tmp = closure_0(this, TapGesture);
    tmp2 = c2;
    obj = c2(TapGesture);
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
    tmp3Result.handlerName = "TapGestureHandler";
    result = tmp3Result.shouldCancelWhenOutside(true);
    return tmp3Result;
  }
}
_classCallCheck = TapGesture;
_inherits(TapGesture, fn(6676).BaseGesture);
const entry = {
  key: "minPointers",
  value: function minPointers(minPointers) {
    this.config.minPointers = minPointers;
    return this;
  }
};
const items = [
  entry,
  {
    key: "numberOfTaps",
    value: function numberOfTaps(numberOfTaps) {
      this.config.numberOfTaps = numberOfTaps;
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
    key: "maxDuration",
    value: function maxDuration(maxDurationMs) {
      this.config.maxDurationMs = maxDurationMs;
      return this;
    }
  },
  {
    key: "maxDelay",
    value: function maxDelay(maxDelayMs) {
      this.config.maxDelayMs = maxDelayMs;
      return this;
    }
  },
  {
    key: "maxDeltaX",
    value: function maxDeltaX(maxDeltaX) {
      this.config.maxDeltaX = maxDeltaX;
      return this;
    }
  },
  {
    key: "maxDeltaY",
    value: function maxDeltaY(maxDeltaY) {
      this.config.maxDeltaY = maxDeltaY;
      return this;
    }
  }
];

export const TapGesture = _createClass(TapGesture, items);
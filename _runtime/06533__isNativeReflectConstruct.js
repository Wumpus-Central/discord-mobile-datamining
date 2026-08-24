// === Module 6533: _isNativeReflectConstruct ===

// Module 6533 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import FlingGesture from "_classCallCheck" /* 41 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
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
class FlingGesture {
  constructor() {
    self = this;
    tmp = FlingGesture(this, FlingGesture);
    tmp2 = closure_2;
    obj = closure_2(FlingGesture);
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
    tmp3Result.handlerName = "FlingGestureHandler";
    return tmp3Result;
  }
}
_inheritsDefault(FlingGesture, require("_isNativeReflectConstruct").BaseGesture);
const items = [
  {
    key: "numberOfPointers",
    value: function numberOfPointers(numberOfPointers) {
      this.config.numberOfPointers = numberOfPointers;
      return this;
    }
  },
  {
    key: "direction",
    value: function direction(DOWN) {
      this.config.direction = DOWN;
      return this;
    }
  }
];

export const FlingGesture = importDefaultResult(FlingGesture, items);
// === Module 5395: _isNativeReflectConstruct ===

// Module 5395 (_isNativeReflectConstruct)
import FlingGesture from "_classCallCheck";
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
class FlingGesture {
  constructor() {
    self = this;
    tmp = FlingGesture(this, FlingGesture);
    tmp2 = __esModule;
    obj = __esModule(FlingGesture);
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
    tmp3Result.handlerName = "FlingGestureHandler";
    return tmp3Result;
  }
}
require("_inherits")(FlingGesture, require("_isNativeReflectConstruct").BaseGesture);
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
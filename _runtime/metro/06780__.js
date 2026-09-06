// _runtime/metro/06780__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
class FlingGesture {
  constructor() {
    self = this;
    tmp = closure_0(this, FlingGesture);
    tmp2 = c2;
    obj = c2(FlingGesture);
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
    tmp3Result.handlerName = "FlingGestureHandler";
    return tmp3Result;
  }
}
_classCallCheck = FlingGesture;
_inherits(FlingGesture, fn(6676).BaseGesture);
const entry = {
  key: "numberOfPointers",
  value: function numberOfPointers(numberOfPointers) {
    this.config.numberOfPointers = numberOfPointers;
    return this;
  },
};
const items = [
  entry,
  {
    key: "direction",
    value: function direction(dependencyMap) {
      this.config.direction = dependencyMap;
      return this;
    },
  },
];

export const FlingGesture = _createClass(FlingGesture, items);

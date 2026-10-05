// === Module 6265: FlingGesture ===

// Module 6265 (FlingGesture)
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
class FlingGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FlingGesture);
    const obj = _getPrototypeOf(FlingGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "FlingGestureHandler";
    return tmp3Result;
  }
}
_inherits(FlingGesture, CALLBACK_TYPE.BaseGesture);
const entry = {
  key: "numberOfPointers",
  value: function numberOfPointers(numberOfPointers) {
    this.config.numberOfPointers = numberOfPointers;
    return this;
  }
};
const items = [
  entry,
  {
    key: "direction",
    value: function direction(dependencyMap) {
      this.config.direction = dependencyMap;
      return this;
    }
  }
];
const FlingGesture_export = _createClass(FlingGesture, items);

export { FlingGesture_export as FlingGesture };
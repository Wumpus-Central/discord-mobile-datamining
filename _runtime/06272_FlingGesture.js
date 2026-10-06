// _runtime/06272_FlingGesture.js
import CALLBACK_TYPE from "06168_CALLBACK_TYPE.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import map from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
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
const FlingGesture_export = _createClass(FlingGesture, items);

export { FlingGesture_export as FlingGesture };

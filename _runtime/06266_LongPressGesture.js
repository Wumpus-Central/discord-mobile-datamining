// === Module 6266: LongPressGesture ===

// Module 6266 (LongPressGesture)
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
class LongPressGesture {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, LongPressGesture);
    const obj = _getPrototypeOf(LongPressGesture);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.config = {};
    tmp3Result.handlerName = "LongPressGestureHandler";
    const result = tmp3Result.shouldCancelWhenOutside(true);
    return tmp3Result;
  }
}
_inherits(LongPressGesture, CALLBACK_TYPE.BaseGesture);
const entry = {
  key: "minDuration",
  value: function minDuration(CONTEXT_MENU_LONG_PRESS_DURATION_MS) {
    this.config.minDurationMs = CONTEXT_MENU_LONG_PRESS_DURATION_MS;
    return this;
  }
};
const items = [
  entry,
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
const LongPressGesture_export = _createClass(LongPressGesture, items);

export { LongPressGesture_export as LongPressGesture };
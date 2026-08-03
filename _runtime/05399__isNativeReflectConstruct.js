// === Module 5399: _isNativeReflectConstruct ===

// Module 5399 (_isNativeReflectConstruct)
import ManualGesture from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
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
function changeEventCalculator(arg0, arg1) {
  return arg0;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 12945462865583;
changeEventCalculator.__initData = { code: "function changeEventCalculator_Pnpm_manualGestureTs1(current,_previous){return current;}" };
class ManualGesture {
  constructor() {
    self = this;
    tmp = ManualGesture(this, ManualGesture);
    tmp2 = __esModule;
    obj = __esModule(ManualGesture);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.handlerName = "ManualGestureHandler";
    return tmp3Result;
  }
}
require("_inherits")(ManualGesture, require("_isNativeReflectConstruct").ContinousBaseGesture);
let items = [
  {
    key: "onChange",
    value: function onChange(arg0) {
      this.handlers.changeEventCalculator = changeEventCalculator;
      const self = this;
      let fn;
      fn = callback2(callback(self.prototype), "onChange", this);
      if (typeof fn !== "HAS_APPLICATION") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    }
  }
];

export const ManualGesture = importDefaultResult(ManualGesture, items);
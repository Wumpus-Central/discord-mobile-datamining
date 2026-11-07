// === Module 5559: ? ===

// Module 5559
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck_mod from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
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
let _classCallCheck = _classCallCheck_mod;
_possibleConstructorReturnDefault;
let items = [{ code: "(function changeEventCalculator_Pnpm_manualGestureTs1(current,_previous){return current;})" }];
[tmp4] = items;
function changeEventCalculator(arg0, arg1) {
  return arg0;
}
changeEventCalculator.__workletHash = 8372703750542;
changeEventCalculator.__initData = tmp4;
class ManualGesture {
  constructor() {
    self = this;
    tmp = closure_0(this, ManualGesture);
    tmp2 = c2;
    obj = c2(ManualGesture);
    tmp3 = closure_1;
    if (closure_4()) {
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
_classCallCheck = ManualGesture;
_inherits(ManualGesture, fn(5440).ContinousBaseGesture);
const entry = {
  key: "onChange",
  value: function onChange(arg0) {
    this.handlers.changeEventCalculator = hasOwnProperty;
    const self = this;
    let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "onChange", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    items = [arg0];
    return fn(items);
  }
};
const items1 = [entry];

export const ManualGesture = _createClass(ManualGesture, items1);
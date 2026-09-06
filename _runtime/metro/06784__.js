// _runtime/metro/06784__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
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
_possibleConstructorReturnDefault;
function changeEventCalculator(arg0, arg1) {
  return arg0;
}
changeEventCalculator.__closure = {};
changeEventCalculator.__workletHash = 12945462865583;
changeEventCalculator.__initData = {
  code: "function changeEventCalculator_Pnpm_manualGestureTs1(current,_previous){return current;}",
};
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
_inherits(ManualGesture, fn(6676).ContinousBaseGesture);
const entry = {
  key: "onChange",
  value: function onChange(arg0) {
    this.handlers.changeEventCalculator = hasOwnProperty;
    const self = this;
    let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "onChange", this);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    return fn(items);
  },
};
let items = [entry];

export const ManualGesture = _createClass(ManualGesture, items);

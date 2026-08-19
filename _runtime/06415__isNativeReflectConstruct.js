// _runtime/06415__isNativeReflectConstruct.js
import noopDefault from "00019_noop.js";
import _isNativeReflectConstructDefault from "06404__isNativeReflectConstruct.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";
import importDefaultResult3 from "06416_PlatformConstants.js";

const ForceTouchFallback = fn;
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
class ForceTouchFallback {
  constructor() {
    self = this;
    tmp = closure_2(this, ForceTouchFallback);
    tmp2 = closure_4;
    obj = closure_4(ForceTouchFallback);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
importDefaultResult1(ForceTouchFallback, noopDefault.Component);
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    console.warn(ForceTouchFallback(6382).tagMessage("ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase"));
  }
};
const items = [
  obj,
  {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }
];
let importDefaultResultResult = importDefaultResult(ForceTouchFallback, items);
importDefaultResultResult.forceTouchAvailable = false;
let forceTouchAvailable;
if (importDefaultResult3 != null) {
  forceTouchAvailable = importDefaultResult3.forceTouchAvailable;
}
const items1 = ["minForce", "maxForce", "feedbackOnActivation"];
if (forceTouchAvailable) {
  obj = { name: "ForceTouchGestureHandler", allowedProps: null, config: null };
  const items2 = [];
  HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(require("items1").baseGestureHandlerProps, 0));
  obj[1] = items2;
  obj[2] = {};
  importDefaultResultResult = _isNativeReflectConstructDefault(obj);
  const importDefaultResult4 = _isNativeReflectConstructDefault;
}
let flag;
if (importDefaultResult3 != null) {
  flag = importDefaultResult3.forceTouchAvailable;
}
if (!flag) {
  flag = false;
}
importDefaultResultResult.forceTouchAvailable = flag;

export const forceTouchGestureHandlerProps = items1;
export const forceTouchHandlerName = "ForceTouchGestureHandler";
export const ForceTouchGestureHandler = importDefaultResultResult;
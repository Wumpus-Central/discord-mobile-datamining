// _runtime/06415__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import importDefaultResult3 from "PlatformConstants";

const ForceTouchFallback = arg1;
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
class ForceTouchFallback {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, ForceTouchFallback);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(ForceTouchFallback);
    tmp3 = _isNativeReflectConstruct;
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
importDefaultResult1(ForceTouchFallback, require("noop").Component);
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
  importDefaultResultResult = require("_isNativeReflectConstruct")(obj);
  const importDefaultResult4 = require("_isNativeReflectConstruct");
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
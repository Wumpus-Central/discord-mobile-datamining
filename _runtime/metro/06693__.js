// _runtime/metro/06693__.js
import _modDef6682 from "06682__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";
import PlatformConstants from "06694__.js";

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
  } catch (err) {}
}
class ForceTouchFallback {
  constructor() {
    self = this;
    tmp = c2(this, ForceTouchFallback);
    tmp2 = closure_4;
    obj = closure_4(ForceTouchFallback);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(ForceTouchFallback, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    console.warn(
      ForceTouchFallback(6660).tagMessage(
        "ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase",
      ),
    );
  },
};
const items = [
  entry,
  {
    key: "render",
    value: function render() {
      return this.props.children;
    },
  },
];
let importDefaultResultResult = _createClass(ForceTouchFallback, items);
importDefaultResultResult.forceTouchAvailable = false;
let forceTouchAvailable;
if (PlatformConstants != null) {
  forceTouchAvailable = PlatformConstants.forceTouchAvailable;
}
const items1 = ["minForce", "maxForce", "feedbackOnActivation"];
if (forceTouchAvailable) {
  let obj = { name: "ForceTouchGestureHandler", allowedProps: null, config: null };
  const items2 = [];
  HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(fn(6680).baseGestureHandlerProps, 0));
  obj.allowedProps = items2;
  obj.config = {};
  importDefaultResultResult = _modDef6682(obj);
  const importDefaultResult4 = _modDef6682;
}
let flag;
if (PlatformConstants != null) {
  flag = PlatformConstants.forceTouchAvailable;
}
if (!flag) {
  flag = false;
}
importDefaultResultResult.forceTouchAvailable = flag;

export const forceTouchGestureHandlerProps = items1;
export const forceTouchHandlerName = "ForceTouchGestureHandler";
export const ForceTouchGestureHandler = importDefaultResultResult;

// _runtime/06185_forceTouchGestureHandlerProps.js
import tagMessage from "06152_tagMessage.js";
import baseGestureHandlerProps from "06172_baseGestureHandlerProps.js";
import createHandlerDefault from "06174_createHandler.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";
import react_native from "06186_react-native.js";

let items2;
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
class ForceTouchFallback {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ForceTouchFallback);
    const obj = _getPrototypeOf(ForceTouchFallback);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ForceTouchFallback, react.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const obj = tagMessage;
    warn(
      obj.tagMessage(
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
if (react_native != null) {
  forceTouchAvailable = react_native.forceTouchAvailable;
}
const items1 = ["minForce", "maxForce", "feedbackOnActivation"];
if (forceTouchAvailable) {
  let obj = { name: "ForceTouchGestureHandler", allowedProps: items2, config: {} };
  items2 = [];
  const importDefaultResult4 = createHandlerDefault;
  HermesBuiltin.arraySpread(
    items2,
    items1,
    HermesBuiltin.arraySpread(items2, baseGestureHandlerProps.baseGestureHandlerProps, 0),
  );
  importDefaultResultResult = importDefaultResult4(obj);
}
let flag;
if (react_native != null) {
  flag = react_native.forceTouchAvailable;
}
if (!flag) {
  flag = false;
}
importDefaultResultResult.forceTouchAvailable = flag;

export const forceTouchGestureHandlerProps = items1;
export const forceTouchHandlerName = "ForceTouchGestureHandler";
export const ForceTouchGestureHandler = importDefaultResultResult;

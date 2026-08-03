// === Module 5409: _isNativeReflectConstruct ===

// Module 5409 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c10;
let c9;
let TouchableHighlight = arg1;
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
let closure_3 = ["style"];
({ StyleSheet: c9, View: c10 } = get_ActivityIndicator);
class TouchableHighlight {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.showUnderlay = () => {
      let obj = tmp3Result;
      if (tmp3Result.hasPressHandler()) {
        obj = { extraChildStyle: null, extraUnderlayStyle: null };
        obj = { opacity: null };
        obj[0] = obj.props.activeOpacity;
        obj[0] = obj;
        const obj1 = { backgroundColor: null };
        obj1[0] = obj.props.underlayColor;
        obj[1] = obj1;
        obj.setState(obj);
        const props = obj.props;
        const onShowUnderlay = props.onShowUnderlay;
        if (onShowUnderlay != null) {
          onShowUnderlay();
        }
      }
    };
    tmp3Result.hasPressHandler = () => tmp3Result.props.onPress || tmp3Result.props.onPressIn || tmp3Result.props.onPressOut || tmp3Result.props.onLongPress;
    tmp3Result.hideUnderlay = () => {
      tmp3Result.setState({ extraChildStyle: null, extraUnderlayStyle: null });
      const props = tmp3Result.props;
      const onHideUnderlay = props.onHideUnderlay;
      if (onHideUnderlay != null) {
        onHideUnderlay();
      }
    };
    tmp3Result.onStateChange = (arg0, arg1) => {
      if (arg1 === tmp3Result(outer1_2[9]).TOUCHABLE_STATE.BEGAN) {
        tmp3Result.showUnderlay();
      } else {
        if (!tmp3) {
          tmp3Result.hideUnderlay();
        }
        tmp3 = arg1 !== tmp(tmp2[9]).TOUCHABLE_STATE.UNDETERMINED && arg1 !== tmp(tmp2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
      }
    };
    tmp3Result.state = { extraChildStyle: null, extraUnderlayStyle: null };
    return tmp3Result;
  }
}
require("_inherits")(TouchableHighlight, require("noop").Component);
let obj = {
  key: "renderChildren",
  value: function renderChildren() {
    const self = this;
    if (this.props.children) {
      const Children = React.Children;
      const onlyResult = Children.only(self.props.children);
      const obj = { style: null };
      obj[0] = closure_9.compose(onlyResult.props.style, self.state.extraChildStyle);
      return React.cloneElement(onlyResult, obj);
    } else {
      return <closure_10 />;
    }
  }
};
let items = [
  obj,
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let style = props.style;
      if (undefined === style) {
        style = {};
      }
      const obj = {};
      const tmp = callback(props, closure_3);
      const merged = Object.assign(tmp);
      const items = [style, self.state.extraUnderlayStyle];
      obj.style = items;
      obj.onStateChange = self.onStateChange;
      obj.children = self.renderChildren();
      return jsx(importDefault(5406), {});
    }
  }
];
const importDefaultResultResult = importDefaultResult(TouchableHighlight, items);
obj = {};
let merged = Object.assign(require("_isNativeReflectConstruct").defaultProps);
obj.activeOpacity = 0.85;
obj.delayPressOut = 100;
obj.underlayColor = "black";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
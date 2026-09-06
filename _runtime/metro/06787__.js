// === Module 6787: ? ===

// Module 6787
import _modDef6788 from "module_6788" /* 6788 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const TouchableHighlight = fn;
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
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_9, View: c10 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
class TouchableHighlight {
  constructor(arg0) {
    self = this;
    tmp = hasOwnProperty(this, TouchableHighlight);
    items = [];
    items[0] = global;
    tmp2 = closure_7;
    obj = closure_7(TouchableHighlight);
    tmp3 = metroRequire;
    if (closure_12()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.showUnderlay = () => {
      let obj = closure_0;
      if (closure_0.hasPressHandler()) {
        obj = { extraChildStyle: null, extraUnderlayStyle: null };
        obj = { opacity: null };
        obj.opacity = obj.props.activeOpacity;
        obj.extraChildStyle = obj;
        const obj1 = { backgroundColor: obj.props.underlayColor };
        obj.extraUnderlayStyle = obj1;
        obj.setState(obj);
        const props = obj.props;
        const onShowUnderlay = props.onShowUnderlay;
        if (onShowUnderlay != null) {
          onShowUnderlay();
        }
      }
    };
    tmp3Result.hasPressHandler = () => closure_0.props.onPress || closure_0.props.onPressIn || closure_0.props.onPressOut || closure_0.props.onLongPress;
    tmp3Result.hideUnderlay = () => {
      closure_0.setState({ extraChildStyle: null, extraUnderlayStyle: null });
      const props = closure_0.props;
      const onHideUnderlay = props.onHideUnderlay;
      if (onHideUnderlay != null) {
        onHideUnderlay();
      }
    };
    tmp3Result.onStateChange = (arg0, arg1) => {
      if (arg1 === TouchableHighlight(6788).TOUCHABLE_STATE.BEGAN) {
        closure_0.showUnderlay();
      } else {
        if (!tmp3) {
          closure_0.hideUnderlay();
        }
        tmp3 = arg1 !== tmp(6788).TOUCHABLE_STATE.UNDETERMINED && arg1 !== tmp(6788).TOUCHABLE_STATE.MOVED_OUTSIDE;
      }
    };
    tmp3Result.state = { extraChildStyle: null, extraUnderlayStyle: null };
    return tmp3Result;
  }
}
_inherits(TouchableHighlight, fn(19).Component);
const entry = {
  key: "renderChildren",
  value: function renderChildren() {
    const self = this;
    if (this.props.children) {
      const Children = noop.Children;
      const onlyResult = Children.only(self.props.children);
      const obj = { style: React7.compose(onlyResult.props.style, self.state.extraChildStyle) };
      return noop.cloneElement(onlyResult, obj);
    } else {
      return <closure_1_10 />;
    }
  }
};
let items = [
  entry,
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
      const tmp = _objectWithoutProperties(props, closure_3);
      const merged = Object.assign(tmp);
      const items = [style, self.state.extraUnderlayStyle];
      obj.style = items;
      obj.onStateChange = self.onStateChange;
      obj.children = self.renderChildren();
      return jsx(_modDef6788, {});
    }
  }
];
const importDefaultResultResult = _createClass(TouchableHighlight, items);
let obj = {};
let merged = Object.assign(_modDef6788.defaultProps);
obj.activeOpacity = 0.85;
obj.delayPressOut = 100;
obj.underlayColor = "black";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
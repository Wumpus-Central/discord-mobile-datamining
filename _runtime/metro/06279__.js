// _runtime/metro/06279__.js
import react2 from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import TOUCHABLE_STATEDefault from "../06280_TOUCHABLE_STATE.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react_native from "../00017_react-native.js";

const react = react2;

let c10;
let c9;
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
let closure_3 = ["style"];
const Component = react2.Component;
({ StyleSheet: c9, View: c10 } = react_native);
const jsx = Fragment.jsx;
class TouchableHighlight {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, TouchableHighlight);
    const items = [arg0];
    const obj = _getPrototypeOf(TouchableHighlight);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = metroRequire(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.showUnderlay = () => {
      let obj3;
      let obj4;
      if (closure_0.hasPressHandler()) {
        const obj2 = { extraChildStyle: obj3, extraUnderlayStyle: obj4 };
        obj3 = { opacity: closure_0.props.activeOpacity };
        obj4 = { backgroundColor: closure_0.props.underlayColor };
        closure_0.setState(obj2);
        const props = closure_0.props;
        const onShowUnderlay = props.onShowUnderlay;
        if (onShowUnderlay != null) {
          onShowUnderlay();
        }
      }
    };
    tmp3Result.hasPressHandler = () =>
      closure_0.props.onPress || closure_0.props.onPressIn || closure_0.props.onPressOut || closure_0.props.onLongPress;
    tmp3Result.hideUnderlay = () => {
      closure_0.setState({ extraChildStyle: null, extraUnderlayStyle: null });
      const props = closure_0.props;
      const onHideUnderlay = props.onHideUnderlay;
      if (onHideUnderlay != null) {
        onHideUnderlay();
      }
    };
    tmp3Result.onStateChange = (arg0, arg1) => {
      if (arg1 === TouchableHighlight(closure_2_2[9]).TOUCHABLE_STATE.BEGAN) {
        closure_0.showUnderlay();
      } else {
        const tmp3 =
          arg1 !== TouchableHighlight(closure_2_2[9]).TOUCHABLE_STATE.UNDETERMINED &&
          arg1 !== TouchableHighlight(closure_2_2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
        if (!tmp3) {
          closure_0.hideUnderlay();
        }
      }
    };
    tmp3Result.state = { extraChildStyle: null, extraUnderlayStyle: null };
    return tmp3Result;
  }
}
_inherits(TouchableHighlight, Component);
const entry = {
  key: "renderChildren",
  value: function renderChildren() {
    const self = this;
    if (this.props.children) {
      const Children = react.Children;
      const onlyResult = Children.only(self.props.children);
      const cloneElement = react.cloneElement;
      const obj = { style: React4.compose(onlyResult.props.style, self.state.extraChildStyle) };
      return cloneElement(onlyResult, obj);
    } else {
      return <authStore />;
    }
  },
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
      const extraUnderlayStyle = self.state.extraUnderlayStyle;
      const tmp = _objectWithoutProperties(props, closure_3);
      TOUCHABLE_STATEDefault;
      const merged = Object.assign(tmp);
      const items = [style, extraUnderlayStyle];
      return (
        <tmp2 style={items} onStateChange={self.onStateChange}>
          {self.renderChildren()}
        </tmp2>
      );
    },
  },
];
const importDefaultResultResult = _createClass(TouchableHighlight, items);
let obj = { activeOpacity: 0.85, delayPressOut: 100, underlayColor: "black" };
let merged = Object.assign(TOUCHABLE_STATEDefault.defaultProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;

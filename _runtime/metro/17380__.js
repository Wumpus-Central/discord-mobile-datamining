// _runtime/metro/17380__.js
import Fragment from "../react/00021_Fragment.js";
import _modDef9536 from "09536__.js";
import _modDef17379 from "17379__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_0 = ["fill", "prefill"];
const Animated = react_native.Animated;
const Easing = react_native.Easing;
const jsx = Fragment.jsx;
const module_17379 = Animated.createAnimatedComponent(_modDef17379);
class AnimatedCircularProgress {
  constructor(prefill) {
    let constructResult;
    let value;
    const self = this;
    closure_0 = prefill;
    _classCallCheck(this, AnimatedCircularProgress);
    const items = [prefill];
    const obj = _getPrototypeOf(AnimatedCircularProgress);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    const obj2 = { fillAnimation: value };
    value = new Animated.Value(prefill.prefill);
    tmp3Result.state = obj2;
    if (prefill.onFillChange) {
      const fillAnimation = tmp3Result.state.fillAnimation;
      fillAnimation.addListener((value) => closure_0.onFillChange(value.value));
    }
    return tmp3Result;
  }
}
_inherits(AnimatedCircularProgress, react.PureComponent);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    this.animate();
  },
};
let items = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0) {
      const self = this;
      if (arg0.fill !== this.props.fill) {
        self.animate();
      }
    },
  },
  {
    key: "reAnimate",
    value: function reAnimate(arg0, arg1, arg2, arg3) {
      let value;
      const self = this;
      let closure_1 = arg1;
      let closure_2 = arg2;
      closure_0 = arg3;
      const setState = this.setState;
      const obj = { fillAnimation: value };
      value = new Animated.Value(arg0);
      setState(obj, () => self.animate(closure_1, closure_2, closure_0));
    },
  },
  {
    key: "animate",
    value: function animate(arg0, arg1, arg2) {
      const self = this;
      let fill = arg0;
      if (arg0 < 0) {
        fill = self.props.fill;
      }
      const obj = {
        useNativeDriver: self.props.useNativeDriver,
        toValue: fill,
        easing: arg2 || self.props.easing,
        duration: arg1 || self.props.duration,
        delay: self.props.delay,
      };
      const timingResult = Animated.timing(self.state.fillAnimation, obj);
      timingResult.start(self.props.onAnimationComplete);
      return timingResult;
    },
  },
  {
    key: "animateColor",
    value: function animateColor() {
      let items;
      let tintColor;
      const self = this;
      if (this.props.tintColorSecondary) {
        const fillAnimation = self.state.fillAnimation;
        const obj = { inputRange: [0, 100], outputRange: items };
        items = [self.props.tintColor, self.props.tintColorSecondary];
        tintColor = fillAnimation.interpolate(obj);
      } else {
        tintColor = self.props.tintColor;
      }
      return tintColor;
    },
  },
  {
    key: "render",
    value: function render() {
      let fill;
      let prefill;
      const props = this.props;
      ({ fill, prefill } = props);
      const merged = Object.assign(_objectWithoutProperties(props, closure_0));
      return <module_17379 fill={this.state.fillAnimation} tintColor={this.animateColor()} />;
    },
  },
];
const importDefaultResultResult = _createClass(AnimatedCircularProgress, items);
let obj = {
  prefill: _modDef9536.number,
  duration: _modDef9536.number,
  easing: _modDef9536.func,
  onAnimationComplete: _modDef9536.func,
  useNativeDriver: _modDef9536.bool,
  delay: _modDef9536.number,
};
let merged = Object.assign(_modDef17379.propTypes);
importDefaultResultResult.propTypes = obj;
let obj2 = { duration: 500, easing: Easing.out(Easing.ease), prefill: 0, useNativeDriver: false, delay: 0 };
importDefaultResultResult.defaultProps = obj2;

export default importDefaultResultResult;

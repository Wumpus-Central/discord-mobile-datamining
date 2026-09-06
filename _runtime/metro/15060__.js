// _runtime/metro/15060__.js
import _modDef9875 from "09875__.js";
import _modDef15059 from "15059__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
const AnimatedCircularProgress = ["fill", "prefill"];
get_ActivityIndicator = fn(17);
const Animated = get_ActivityIndicator.Animated;
const Easing = get_ActivityIndicator.Easing;
const jsx = fn(21).jsx;
_isNativeReflectConstruct = Animated.createAnimatedComponent(_modDef15059);
class AnimatedCircularProgress {
  constructor(arg0) {
    self = this;
    closure_0 = global;
    tmp = c2(this, AnimatedCircularProgress);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(AnimatedCircularProgress);
    tmp3 = closure_3;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { fillAnimation: null };
    value = new hasOwnProperty.Value(global.prefill);
    obj.fillAnimation = value;
    tmp3Result.state = obj;
    if (global.onFillChange) {
      fillAnimation = tmp3Result.state.fillAnimation;
      addListenerResult = fillAnimation.addListener((value) => prefill.onFillChange(value.value));
    }
    return tmp3Result;
  }
}
_inherits(AnimatedCircularProgress, noop.PureComponent);
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
      const self = this;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_0 = arg3;
      const obj = { fillAnimation: null };
      value = new Animated.Value(arg0);
      obj.fillAnimation = value;
      this.setState(obj, () => self.animate(closure_1, closure_2, closure_0));
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
      let duration = arg1;
      if (!arg1) {
        duration = self.props.duration;
      }
      let easing = arg2;
      if (!arg2) {
        easing = self.props.easing;
      }
      const timingResult = Animated.timing(self.state.fillAnimation, {
        useNativeDriver: self.props.useNativeDriver,
        toValue: fill,
        easing,
        duration,
        delay: self.props.delay,
      });
      timingResult.start(self.props.onAnimationComplete);
      return timingResult;
    },
  },
  {
    key: "animateColor",
    value: function animateColor() {
      const self = this;
      if (this.props.tintColorSecondary) {
        const fillAnimation = self.state.fillAnimation;
        const obj = { inputRange: [0, 100], outputRange: null };
        const items = [self.props.tintColor, self.props.tintColorSecondary];
        obj.outputRange = items;
        let tintColor = fillAnimation.interpolate(obj);
      } else {
        tintColor = self.props.tintColor;
      }
      return tintColor;
    },
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ fill, prefill } = props);
      const obj = {};
      const merged = Object.assign(_objectWithoutProperties(props, AnimatedCircularProgress));
      obj.fill = this.state.fillAnimation;
      obj.tintColor = this.animateColor();
      return <_isNativeReflectConstruct />;
    },
  },
];
const importDefaultResultResult = _createClass(AnimatedCircularProgress, items);
let obj = {};
let merged = Object.assign(_modDef15059.propTypes);
obj.prefill = _modDef9875.number;
obj.duration = _modDef9875.number;
obj.easing = _modDef9875.func;
obj.onAnimationComplete = _modDef9875.func;
obj.useNativeDriver = _modDef9875.bool;
obj.delay = _modDef9875.number;
importDefaultResultResult.propTypes = obj;
obj = { duration: 500, easing: Easing.out(Easing.ease), prefill: 0, useNativeDriver: false, delay: 0 };
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
